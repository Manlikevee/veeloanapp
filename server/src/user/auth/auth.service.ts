import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { Tokens } from '../types';
import { JwtService } from '@nestjs/jwt';
import { throwError } from 'rxjs';
interface CreateUserData {
  email: string;
  password: string;
  userName: string;
}
interface LoginUserDetails {
  email: string;
  password: string;
}
@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async getToken(userId: number, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email: email,
        },
        {
          secret: 'at-secret',
          expiresIn: 60 * 60,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email: email,
        },
        {
          secret: 'rt-secret',
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);
    return {
      access_token: at,
      refresh_token: rt,
    };
  }
  async createUserAcct({
    email,
    password,
    userName,
  }: CreateUserData): Promise<Tokens> {
    const emailExist = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (emailExist) throw new BadRequestException('email already exist');
    const hashpassword = await bcrypt.hash(password, 12);

    const user = await this.prismaService.user.create({
      data: {
        email: email,
        userName: userName,
        password: hashpassword,
      },
    });
    const tokens = await this.getToken(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refresh_token);
    return {
      ...user,
      ...tokens,
    };
  }
  async updateRefreshToken(userId: number, rt: string) {
    const hash = await bcrypt.hash(rt, 12);
    await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        hashRt: hash,
      },
    });
  }
  async LoginUserAcct({ email, password }: LoginUserDetails): Promise<Tokens> {
    let user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) throw new NotFoundException('user does not exist');
    //compare the passwords
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword)
      throw new BadRequestException('Incorrect Password,please try again');
    const tokens = await this.getToken(user.id, user.email);
    this.updateRefreshToken(user.id, tokens.refresh_token);
    return {
      ...user,
      ...tokens,
    };
  }

  async logout(userId: number) {
    await this.prismaService.user.update({
      where: {
        id: userId,
        hashRt: {
          not: null,
        },
      },
      data: {
        hashRt: null,
      },
    });
  }
  async refresh(userId: number, rt: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) throw new UnauthorizedException('Access denied');
    const rtMatches = await bcrypt.compare(rt, user.hashRt);
    if (!rtMatches) throw new ForbiddenException('Access denied');
    const tokens = await this.getToken(user.id, user.email);
    this.updateRefreshToken(user.id, tokens.refresh_token);
    return tokens;
  }
}
