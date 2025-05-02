// src/orders/dto/update-order.dto.ts
import { IsEnum } from 'class-validator';
import { OrderStatus } from '../order.entity';

export class UpdateOrderDto {
  @IsEnum(OrderStatus)
  status: OrderStatus;
}