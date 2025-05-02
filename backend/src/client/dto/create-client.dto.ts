import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsNumber()
  sales: number;

  @IsString()
  @IsOptional()
  representative?: string;

  @IsString()
  address?: string;

  @IsString()
  email?: string;

  @IsString()
  phone?: string;

  
  @IsString()
  bankaccount?: string;

}
