// src/restaurants/restaurant.entity.ts
import { MenuItem } from 'src/menu/menuItem.entity';
import { Order } from 'src/order/order.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  // Existing fields
  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ type: 'jsonb', nullable: true })
  openingHours: {
    from: string;
    to: string;
  };

  @Column('text', { array: true })
  categories: string[];

  @ManyToOne(() => User, (user) => user.restaurant)
  @JoinColumn({ name: 'owner_id' })
  owner: User;
  menuItem: any;


  @OneToMany(() => MenuItem, (menuItem) => menuItem.restaurant)
  menuItems: MenuItem[];
  
  @OneToMany(() => Order, (order) => order.restaurant)
  orders: Order[];
  constructor(partial?: Partial<Restaurant>) {
    Object.assign(this, partial);
  }
}
