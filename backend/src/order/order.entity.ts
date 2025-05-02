// src/orders/order.entity.ts
import { Entity, Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from '../client/client.entity';
import { Restaurant } from '../restaurant/restaurant.entity';
import { OrderItem } from './orderItem.entity';

export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount: number;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Client, (client) => client.order)
  client: Client;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders)
  restaurant: Restaurant;

  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem[];
}