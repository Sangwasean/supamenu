// src/restaurants/restaurant.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  // Existing fields
  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  openingHours: string;

  @Column({ type: 'text', array: true })
  categories: string[];

  // New fields
  @Column()
  ownerName: string;

  @Column()
  ownerEmail: string;

  @Column()
  phone: string;
  menuItem: any;

  // Add other fields like:
  // @Column()
  // bankAccount: string;
}