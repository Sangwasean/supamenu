// restaurants/restaurants.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Restaurant } from './restaurant.entity';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Controller('restaurant')
export class RestaurantsController {
  constructor(private restaurantService: RestaurantService) {}

  @Post()
  create(@Body() restaurantData: CreateRestaurantDto) {
    return this.restaurantService.create(restaurantData);
  }

  @Get()
  findAll() {
    return this.restaurantService.findAll();
  }
}