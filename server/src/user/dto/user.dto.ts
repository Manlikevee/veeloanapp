import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsString()
  userName: string;
  @IsString()
  password: string;
}

export class LoginUserDto {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
