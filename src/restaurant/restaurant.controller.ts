import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './entities/restaurant.entity';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  findAll(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Restaurant | undefined> {
    return this.restaurantService.findById(+id);
  }

  @Post()
  create(@Body() restaurantData: Partial<Restaurant>): Promise<Restaurant> {
    return this.restaurantService.create(restaurantData);
  }

  
}
