// src/restaurants/dto/create-restaurant.dto.ts
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsArray,
} from 'class-validator';

class OpeningHoursDto {
  @IsString()
  @IsNotEmpty()
  from: string;

  @IsString()
  @IsNotEmpty()
  to: string;
}
export class CreateRestaurantDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  openingHours: OpeningHoursDto;

  @IsArray()
  @IsNotEmpty({ each: true })
  categories: string[];
}
