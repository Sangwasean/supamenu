import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service';

@ApiTags('Analytics')
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('overview')
  @ApiOperation({ summary: 'Get overview stats (clients, revenue, orders)' })
  getOverview() {
    return this.analyticsService.getOverviewStats();
  }

  @Get('trends')
  @ApiOperation({ summary: 'Get time-based order trends' })
  @ApiQuery({ name: 'period', enum: ['day', 'week', 'month', 'year'] })
  getTrends(@Query('period') period: 'day' | 'week' | 'month' | 'year') {
    return this.analyticsService.getTrends(period);
  }

  @Get('clients')
  @ApiOperation({ summary: 'Get client sales data' })
  getClientSales() {
    return this.analyticsService.getClientSales();
  }

  @Get('revenue-categories')
  @ApiOperation({ summary: 'Revenue by restaurant type' })
  getRevenueByCategory() {
    return this.analyticsService.getRevenueByCategory();
  }
}
