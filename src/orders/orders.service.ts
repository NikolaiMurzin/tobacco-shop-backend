import  WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { Injectable, HttpException, Inject } from '@nestjs/common';

@Injectable()
export class OrdersService {

    constructor(@Inject('WooCommerceRestApi') private wcApi: WooCommerceRestApi) {}

    async createOrder(data) {
        try{
            const response = await this.wcApi.post("orders", data)
            return response.data
        } catch(err) {
            throw new HttpException(err.response.data.message, err.response.status)
        }
    }
    async getAllOrders() {
        return await this.wcApi.get("orders")
    }
}