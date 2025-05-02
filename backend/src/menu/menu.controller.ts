// src/menu/menu.controller.ts
import { Controller, Post, Body, Param, Get, Delete, Patch } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Menu')
@Controller('restaurant/:restaurantId/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @ApiOperation({ summary: 'Add menu item to restaurant' })
  create(
    @Param('restaurantId') restaurantId: number,
    @Body() createMenuItemDto: CreateMenuItemDto,
  ) {
    return this.menuService.create(restaurantId, createMenuItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get restaurant menu' })
  findAll(@Param('restaurantId') restaurantId: number) {
    return this.menuService.findAll(restaurantId);
  }

  @Delete(':itemId')
  @ApiOperation({ summary: 'Delete menu item' })
  remove(@Param('itemId') itemId: number) {
    return this.menuService.remove(itemId);
  }

  @Patch(':itemId')
  @ApiOperation({ summary: 'Update menu item' })
  update(
    @Param('itemId') itemId: number,
    @Body() updateDto: UpdateMenuItemDto,
  ) {
    return this.menuService.update(itemId, updateDto);
  }
}