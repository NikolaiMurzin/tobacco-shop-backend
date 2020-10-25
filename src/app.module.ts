import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { OrdersModule } from './orders/orders.module';
import { WooCommerceModule } from './woo-commerce/woo-commerce.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      envFilePath: '/home/nikolai/tobacco-shop-nest/config.env'
    }),
    OrdersModule,
    WooCommerceModule,
  ]
})
export class AppModule {}