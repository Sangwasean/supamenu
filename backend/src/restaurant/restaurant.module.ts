// src/restaurants/restaurants.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './restaurant.entity';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { JwtAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { UsersModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant]),UsersModule],
  controllers: [RestaurantController],
  providers: [RestaurantService,JwtAuthGuard],
})
export class RestaurantModule {}