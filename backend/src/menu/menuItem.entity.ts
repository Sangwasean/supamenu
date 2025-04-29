import { Restaurant } from 'src/restaurant/restaurant.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.menuItem)
  restaurant: Restaurant;
}
