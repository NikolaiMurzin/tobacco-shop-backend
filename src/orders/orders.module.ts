import { OrdersService } from './orders.service';
import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';

@Module({
    providers: [
      OrdersService,
    ],
    controllers: [OrdersController],
})
export class OrdersModule {} 