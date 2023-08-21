import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
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
  constructor(private readonly prismaService: PrismaService) {}
  async createUserAcct({ email, password, userName }: CreateUserData) {
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
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.SECRET_KEY,
    );
    return { user, token };
  }
  async LoginUserAcct({ email, password }: LoginUserDetails) {
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
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.SECRET_KEY,
    );
    return {
      id: user.id,
      email: user.email,
      token,
    };
  }
}
