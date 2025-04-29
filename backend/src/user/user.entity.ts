import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Restaurant } from 'src/restaurant/restaurant.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    console.log('Hashing password...');
    this.password = await bcrypt.hash(this.password, 10);
  }

  @Column()
  phone: string;

  @Column({ default: 'owner' }) // Roles: owner, admin, etc.
  role: string;

  @OneToMany(() => Restaurant, (restaurant) => restaurant.owner)
  restaurant: Restaurant[];
}
