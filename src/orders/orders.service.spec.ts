import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  let service: any;
  const wcApi = new WooCommerceRestApi({
                  url: 'https://kizilov-group-test.ru/index.php',
                  consumerKey: 'ck_45b39461c7a874f1cccdf9da4f87a7f4cbd98608',
                  consumerSecret: 'cs_c92a3a185d3c781ee81384fe0d50603b06c0022c',
                  version: "wc/v3",
                  queryStringAuth: true,
              })

let createOrderData = {
    "payment_method": "Transfer on delivery",
    "billing": {
      "first_name": "Lenoid",
      "last_name": "Shalaev",
      "city": "ekaterinburg",
      "email": "leonidShalaev@gmail.com",
      "phone": "9220213469",
    },
    "shipping": {
      "address_1": "Малышева 125",
      "city": "ekaterinburg",
    },
    "customer_note": "Домофон не работает пожалуйста позвоните по приезду",
    "line_items": [
      {
        "product_id": "201",
        "quantity": "1"
      },
      {
        "product_id": "195",
        "quantity": "1"
      }
    ] 
  }

  beforeEach(async () => {
    service = new OrdersService(wcApi)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe("get all orders", () => {
    it('get all orders', async () => {
      const result = await service.getAllOrders()
      expect(result.data).toBeDefined()
    })
  })
  describe("create order", () => {
    it('create new order with correct data', async () => {
      const result = await service.createOrder(createOrderData) 
      expect(result).toBeDefined()
    })
  })
});
