import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { UserRole } from '../../user-role/entities/user-role.entity';
import { Inventory } from '../../inventory/entities/inventory.entity';
import { Restaurant } from '../../restaurant/entities/restaurant.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column({ name: 'role_id' })
  roleId: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'business_name', nullable: true })
  businessName: string;

  @Column({ name: 'number_of_locations', default: 0 })
  numberOfLocations: number;

  @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToMany(() => UserRole)
  @JoinTable({
    name: 'user_roles_mapping',
    joinColumns: [{ name: 'user_id' }],
    inverseJoinColumns: [{ name: 'role_id' }],
  })
  roles: UserRole[];

  @OneToMany(() => Inventory, inventory => inventory.user)
  inventories: Inventory[];

  @OneToMany(() => Restaurant, restaurant => restaurant.user)
  restaurants: Restaurant[];
}
