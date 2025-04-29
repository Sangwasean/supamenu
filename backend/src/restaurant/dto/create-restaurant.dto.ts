// src/restaurants/dto/create-restaurant.dto.ts
import { IsNotEmpty, IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateRestaurantDto {
  // Existing fields
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  openingHours: string;

  @IsNotEmpty({ each: true })
  categories: string[];

  // New fields (example from PDF)
  @IsNotEmpty()
  @IsString()
  ownerName: string;

  @IsNotEmpty()
  @IsEmail()
  ownerEmail: string;

  @IsNotEmpty()
  @IsPhoneNumber('RW') // Replace 'RW' with your country code (e.g., 'US')
  phone: string;

  // Add other fields like bankAccount, province, etc. as needed
}