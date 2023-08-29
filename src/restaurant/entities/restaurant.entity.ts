import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { RestaurantType } from '../../restaurant-type/entities/restaurant-type.entity';
import { Inventory } from '../../inventory/entities/inventory.entity';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  email: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'logo_url' })
  logoUrl: string;

  @Column({ name: 'number_of_locations' })
  numberOfLocations: number;

  @ManyToOne(() => User, user => user.restaurants)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => RestaurantType, type => type.restaurants)
  @JoinColumn({ name: 'type_id' })
  type: RestaurantType;

  @OneToMany(() => Inventory, inventory => inventory.restaurant)
  inventories: Inventory[];
}
