import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Restaurant } from '../../restaurant/entities/restaurant.entity';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column({ name: 'item_name' })
  itemName: string;

  @Column({ name: 'unit_of_measure' })
  unitOfMeasure: string;

  @Column({ name: 'in_stock' })
  inStock: number;

  @Column()
  condition: string;

  @Column({ name: 'date_ordered' })
  dateOrdered: Date;

  @ManyToOne(() => Restaurant, restaurant => restaurant.inventories)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: Restaurant;
  user: any;
}
