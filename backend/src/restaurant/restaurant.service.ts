// restaurants/restaurants.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/updateRestaurant.dto';
import { classToPlain } from '@nestjs/class-transformer';
import { User } from 'src/user/user.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  async create(
    createRestaurantDto: CreateRestaurantDto,
    owner: User,
  ): Promise<Restaurant> {
    // Create entity instance directly
    const restaurant = new Restaurant();

    // Manual mapping ensures no undefined values
    restaurant.name = createRestaurantDto.name;
    restaurant.address = createRestaurantDto.address;
    restaurant.openingHours = createRestaurantDto.openingHours;
    restaurant.categories = createRestaurantDto.categories;
    restaurant.owner=owner;

    
    return this.restaurantRepository.save(restaurant);
    
  }

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }
  async findOne(id: number): Promise<Restaurant> {
    const restaurant = await this.restaurantRepository.findOneBy({ id });
    if (!restaurant) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }
    return restaurant;
  }

  async update(
    id: number,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    const restaurant = await this.findOne(id);
    const updated = this.restaurantRepository.merge(
      restaurant,
      UpdateRestaurantDto,
    );
    return this.restaurantRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const restaurant = await this.findOne(id);
    await this.restaurantRepository.remove(restaurant);
  }
}
