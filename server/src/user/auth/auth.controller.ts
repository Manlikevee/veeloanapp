import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import { Serialize } from 'src/interceptor/serialize.interceptor';
import { UserResponse } from '../dto/user.response';
import { Tokens } from '../types';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { use } from 'passport';
import { AtGuard, RtGuard } from 'src/common/guards';
import { Public, getCurrentUser } from 'src/common/decorators';
@Controller('auth')
//@Serialize(UserResponse)
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Post('/signup')
  createUserAcct(@Body() body: CreateUserDto): Promise<Tokens> {
    return this.authService.createUserAcct(body);
  }
  @Public()
  @Post('/signin')
  loginUserAcct(@Body() body: LoginUserDto): Promise<Tokens> {
    return this.authService.LoginUserAcct(body);
  }

  @UseGuards(AtGuard)
  @Post('/logout')
  logout(@getCurrentUser('sub') userId: number) {
    return this.authService.logout(userId);
  }
  @Public()
  @UseGuards(RtGuard)
  @Post('/refresh')
  refreshToken(
    // @getCurrentUser('sub') userId: number,
    // @getCurrentUser('refreshToken') refreshToken: string,
    @Req() req: Request,
  ) {
    const user = req.user;
    return this.authService.refresh(user['sub'], user['refreshToken']);
  }
}
