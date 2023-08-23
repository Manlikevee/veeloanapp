import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import { Serialize } from 'src/interceptor/serialize.interceptor';
import { UserResponse } from '../dto/user.response';
import { Tokens } from '../types';
@Controller('auth')
//@Serialize(UserResponse)
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signup')
  createUserAcct(@Body() body: CreateUserDto): Promise<Tokens> {
    return this.authService.createUserAcct(body);
  }
  @Post('/signin')
  loginUserAcct(@Body() body: LoginUserDto): Promise<Tokens> {
    return this.authService.LoginUserAcct(body);
  }
  @Post()
  userProfile() {}
}
