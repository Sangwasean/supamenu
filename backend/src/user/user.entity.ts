import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

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
}
