import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ClientModule } from './client/client.module';
import { MenuModule } from './menu/menu.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [DatabaseModule, AuthModule , RestaurantModule , ClientModule ,MenuModule ,OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
