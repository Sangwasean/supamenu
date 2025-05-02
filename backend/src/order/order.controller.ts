// src/orders/orders.controller.ts
import { Controller, Post, Body, Param, Get, Patch } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('clients/:clientId/orders')
export class OrderController {
  constructor(private readonly ordersService: OrderService) {}

  @Post()
  @ApiOperation({ summary: 'Create new order' })
  create(
    @Param('clientId') clientId: number,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    return this.ordersService.create(clientId, createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get client order history' })
  findAll(@Param('clientId') clientId: number) {
    return this.ordersService.findAll(clientId);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Update order status' })
  updateStatus(
    @Param('id') id: number,
    @Body() updateDto: UpdateOrderDto,
  ) {
    return this.ordersService.updateStatus(id, updateDto);
  }

  @Patch(':id/cancel')
  @ApiOperation({ summary: 'Cancel order' })
  cancelOrder(@Param('id') id: number) {
    return this.ordersService.cancelOrder(id);
  }
}