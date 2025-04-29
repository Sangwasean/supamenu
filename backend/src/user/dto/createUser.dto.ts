// src/users/dto/create-user.dto.ts
import { IsEmail, IsString, IsPhoneNumber, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsPhoneNumber('RW') // Adjust country code as needed
  phone: string;
}

