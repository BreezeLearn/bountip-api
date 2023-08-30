import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantType } from './entities/restaurant-type.entity';
import { RestaurantTypeService } from './restaurant-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantType])],
  providers: [RestaurantTypeService],
  exports: [RestaurantTypeService], // You can export the service if needed
})
export class RestaurantTypeModule {}
