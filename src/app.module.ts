import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module'; 
import { RestaurantModule } from './restaurant/restaurant.module';
import { InventoryModule } from './inventory/inventory.module';
import { UserRoleModule } from './user-role/user-role.module';
import { RestaurantTypeModule } from './restaurant-type/restaurant-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost', //  database host
      port: 5434, // database port
      username: 'postgres', //  database username
      password: 'postgres', //  database password
      database: 'postgres', //  database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Set to false in production
    }),
    UserModule,
    RestaurantModule,
    InventoryModule,
    UserRoleModule,
    RestaurantTypeModule,
    // Include other modules here
  ],
})
export class AppModule {}
