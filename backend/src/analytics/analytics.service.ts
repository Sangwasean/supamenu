// src/analytics/analytics.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Order } from 'src/order/order.entity';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,
  ) {}

  // 1. Get Overview Stats (Clients, Revenues, Orders, Items)
  async getOverviewStats() {
    const [clientsResult] = await this.orderRepo
      .createQueryBuilder('order')
      .select('COUNT(DISTINCT order.clientId)', 'totalClients')
      .getRawMany();

    const [revenueResult] = await this.orderRepo
      .createQueryBuilder('order')
      .select('SUM(order.totalAmount)', 'totalRevenue')
      .getRawMany();

    const totalOrders = await this.orderRepo.count();

    return {
      totalClients: Number(clientsResult.totalClients) || 0,
      totalRevenue: Number(revenueResult.totalRevenue) || 0,
      totalOrders,
      // Add items count if needed
    };
  }

  // 2. Get Trends Data (Time-based aggregation)
  async getTrends(period: 'day' | 'week' | 'month' | 'year') {
    const { startDate, endDate } = this.getDateRange(period);
    
    return this.orderRepo
      .createQueryBuilder('order')
      .select(`DATE_TRUNC('hour', order.createdAt)`, 'timestamp')
      .addSelect('SUM(order.totalAmount)', 'amount')
      .where({ createdAt: Between(startDate, endDate) })
      .groupBy('timestamp')
      .orderBy('timestamp', 'ASC')
      .getRawMany();
  }

  // 3. Get Client List with Sales
  async getClientSales() {
    return this.orderRepo
      .createQueryBuilder('order')
      .select('client.id', 'clientId')
      .addSelect('client.name', 'clientName')
      .addSelect('SUM(order.totalAmount)', 'totalSpent')
      .addSelect('COUNT(order.id)', 'totalOrders')
      .innerJoin('order.client', 'client')
      .groupBy('client.id')
      .getRawMany();
  }

  // 4. Revenue by Category (Restaurant Type)
  async getRevenueByCategory() {
    return this.orderRepo
      .createQueryBuilder('order')
      .select('restaurant.type', 'category')
      .addSelect('SUM(order.totalAmount)', 'revenue')
      .innerJoin('order.restaurant', 'restaurant')
      .groupBy('restaurant.type')
      .getRawMany();
  }

  // Helper: Calculate date range
  private getDateRange(period: string) {
    const now = new Date();
    const startDate = new Date(now);

    switch (period) {
      case 'day':
        startDate.setHours(0, 0, 0, 0);
        break;
      case 'week':
        startDate.setDate(startDate.getDate() - 7);
        break;
      case 'month':
        startDate.setMonth(startDate.getMonth() - 1);
        break;
      case 'year':
        startDate.setFullYear(startDate.getFullYear() - 1);
        break;
    }

    return { startDate, endDate: now };
  }
}