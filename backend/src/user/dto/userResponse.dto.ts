
import { Exclude } from '@nestjs/class-transformer';
import { User } from '../user.entity';

export class UserResponseDto extends User {

  @Exclude()
  hashPassword: () => Promise<void>;
  
  constructor(partial: Partial<UserResponseDto>) {
    super();
    Object.assign(this, partial);
  }
}