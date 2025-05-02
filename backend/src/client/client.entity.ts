import { Order } from 'src/order/order.entity';
import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;
  @Column()
  representative: string;
  @Column()
  address: string;
  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  bankaccount: string;

  @Column()
  sales: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_of_creation: Date;

  @OneToMany(() => Order, (order) => order.client)
  order: Order[];
}