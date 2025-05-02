import { IsString, IsNumber, IsArray, IsOptional } from 'class-validator';

export class CreateMenuItemDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  category: 'Drink' | 'Starter' | 'Appetizer' | 'Dessert' | 'Main';

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  ingredients?: string[];

  @IsString()
  @IsOptional()
  imageUrl?: string;
}

