import { IsArray, IsNumber, ValidateNested } from 'class-validator';

class OrderItemDto {
  @IsNumber()
  menuItemId: number;

  @IsNumber()
  quantity: number;
}

export class CreateOrderDto {
  @IsNumber()
  restaurantId: number;

  @IsArray()
  @ValidateNested({ each: true })
  items: OrderItemDto[];
}