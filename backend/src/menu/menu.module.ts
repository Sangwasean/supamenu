// src/menu/menu.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { MenuItem } from './menuItem.entity';
import { RestaurantModule } from '../restaurant/restaurant.module';

@Module({
  imports: [TypeOrmModule.forFeature([MenuItem]), RestaurantModule],
  controllers: [MenuController],
  providers: [MenuService],
  exports:[MenuService],
})
export class MenuModule {}