import { OrdersService } from './orders.service';
import { Controller, UsePipes, Post, Get, ValidationPipe, Body } from '@nestjs/common';
import { CreateOrderDto, Billing, Shipping, Product} from './dto/createOrder.dto'

@Controller('orders')
export class OrdersController {

    constructor(private ordersService: OrdersService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    createOrder(
                @Body() Body: CreateOrderDto,
                @Body('shipping') shipping: Shipping,
                @Body('billing') billing: Billing,
                @Body('line_items') line_items: Product[],
                ) {
        const {...BodyData} = Body
        const data = {
            billing,
            shipping,
            line_items,
            ...BodyData
        }
        return this.ordersService.createOrder(data)
    }
    @Get()
    getAllOrders(){
        return this.ordersService.getAllOrders()
    }
    
}
