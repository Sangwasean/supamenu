// src/orders/orders.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order, OrderStatus } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { ClientService } from '../client/client.service';
import { RestaurantService } from '../restaurant/restaurant.service';
import { MenuService } from '../menu/menu.service';
import { OrderItem } from './orderItem.entity';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(OrderItem) private itemRepository: Repository<OrderItem>,
    private clientService: ClientService,
    private restaurantService: RestaurantService,
    private menuService: MenuService,
  ) {}

  async create(clientId: number, createOrderDto: CreateOrderDto): Promise<Order> {
    const client = await this.clientService.findOne(clientId);
    const restaurant = await this.restaurantService.findOne(createOrderDto.restaurantId);
    
    const order = this.orderRepository.create({
      client,
      restaurant,
      status: OrderStatus.PENDING,
    });

    // Calculate total and create order items
    let total = 0;
    order.items = await Promise.all(
      createOrderDto.items.map(async (item) => {
        const menuItem = await this.menuService.findOne(item.menuItemId);
        
        if(menuItem.restaurant.id !== restaurant.id) {
          throw new Error('Menu item does not belong to restaurant');
        }

        const orderItem = this.itemRepository.create({
          menuItem,
          quantity: item.quantity,
          priceAtOrder: menuItem.price,
        });

        total += menuItem.price * item.quantity;
        return orderItem;
      })
    );

    order.totalAmount = total;
    return this.orderRepository.save(order);
  }

  async findAll(clientId: number): Promise<Order[]> {
    return this.orderRepository.find({
      where: { client: { id: clientId } },
      relations: ['items', 'restaurant'],
    });
  }

  async updateStatus(id: number, updateDto: UpdateOrderDto): Promise<Order> {
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) throw new NotFoundException('Order not found');
    
    order.status = updateDto.status;
    return this.orderRepository.save(order);
  }

  async cancelOrder(id: number): Promise<Order> {
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) throw new NotFoundException('Order not found');
    
    order.status = OrderStatus.CANCELLED;
    return this.orderRepository.save(order);
  }
}