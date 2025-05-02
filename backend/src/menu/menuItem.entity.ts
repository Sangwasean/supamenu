// src/menu/menu-item.entity.ts
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Restaurant } from '../restaurant/restaurant.entity';
import { OrderItem } from 'src/order/orderItem.entity';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  category: 'Drink' | 'Starter' | 'Appetizer' | 'Dessert' | 'Main';

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column('text', { array: true, nullable: true })
  ingredients?: string[];

  @Column({ nullable: true })
  imageUrl?: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.menuItem)
  restaurant: Restaurant;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.menuItem)
  orderItems: OrderItem[];
}