import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signup')
  createUserAcct(@Body() body: CreateUserDto) {
    return this.authService.createUserAcct(body);
  }
  @Post('/signin')
  loginUserAcct(@Body() body: LoginUserDto) {
    return this.authService.LoginUserAcct(body);
  }
}
