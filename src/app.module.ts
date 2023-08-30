import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module'; // Include other modules as needed
import { RestaurantModule } from './restaurant/restaurant.module';
import { InventoryModule } from './inventory/inventory.module';
import { UserRoleModule } from './user-role/user-role.module';
import { RestaurantTypeModule } from './restaurant-type/restaurant-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost', //  database host
      port: 5432, // database port
      username: 'your-username', //  database username
      password: 'your-password', //  database password
      database: 'nestjs_db', //  database name
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
