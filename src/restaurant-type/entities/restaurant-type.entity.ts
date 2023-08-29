import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Restaurant } from '../../restaurant/entities/restaurant.entity'; 

@Entity()
export class RestaurantType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'type_name' })
  typeName: string;

  @OneToMany(() => Restaurant, restaurant => restaurant.type)
  restaurants: Restaurant[];
}
