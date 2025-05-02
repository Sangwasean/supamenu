// src/orders/order-item.entity.ts
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';
import { MenuItem } from '../menu/menuItem.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  priceAtOrder: number; 

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @ManyToOne(() => MenuItem)
  menuItem: MenuItem;
}