// src/restaurants/restaurant.entity.ts
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

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

  constructor(partial?: Partial<Restaurant>) {
    Object.assign(this, partial);
  }
}
