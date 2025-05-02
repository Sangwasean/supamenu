// src/menu/menu.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuItem } from './menuItem.entity';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuItem)
    private menuItemRepository: Repository<MenuItem>,
  ) {}

  
  async create(
    restaurantId: number,
    createMenuItemDto: CreateMenuItemDto,
  ): Promise<MenuItem> {
    const menuItem = this.menuItemRepository.create({
      ...createMenuItemDto,
      restaurant: { id: restaurantId },
    });
    return this.menuItemRepository.save(menuItem);
  }

  async findAll(restaurantId: number): Promise<MenuItem[]> {
    return this.menuItemRepository.find({
      where: { restaurant: { id: restaurantId } },
    });
  }

  async update(id: number, updateDto: UpdateMenuItemDto): Promise<MenuItem> {
    const menuItem = await this.findOne(id);
    return this.menuItemRepository.save({ ...menuItem, ...updateDto });
  }

  async remove(id: number): Promise<void> {
    const menuItem = await this.findOne(id);
    await this.menuItemRepository.remove(menuItem);
  }

  async findOne(id: number): Promise<MenuItem> {
    const menuItem = await this.menuItemRepository.findOne({
      where: { id },
      relations: ['restaurant'],
    });
    
    if (!menuItem) {
      throw new NotFoundException(`Menu item ${id} not found`);
    }
    
    return menuItem;
  }
}