// src/orders/orders.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { OrderItem } from './orderItem.entity';
import { ClientModule } from '../client/client.module';
import { RestaurantModule } from '../restaurant/restaurant.module';
import { MenuModule } from '../menu/menu.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem]),
    ClientModule,
    RestaurantModule,
    MenuModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}