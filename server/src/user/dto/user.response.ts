import { Exclude, Expose } from 'class-transformer';

export class UserResponse {
  @Exclude()
  userName: string;
  @Exclude()
  email: string;

  constructor(partial: Partial<UserResponse>) {}
}
