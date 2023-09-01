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
      host: '127.0.0.1', //  database host
      port: 5432, // database port
      username: 'postgres', //  database username
      password: 'delhi123', //  database password
      database: 'bountip', //  database name
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
