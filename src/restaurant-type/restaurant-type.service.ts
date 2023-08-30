import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestaurantType } from './entities/restaurant-type.entity';

@Injectable()
export class RestaurantTypeService {
  constructor(
    @InjectRepository(RestaurantType)
    private readonly restaurantTypeRepository: Repository<RestaurantType>,
  ) {}

  // methods for CRUD operations on the RestaurantType entity
}
