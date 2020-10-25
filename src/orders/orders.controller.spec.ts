import * as request from 'supertest'

describe('Orders Controller', () => {

  const serverUrl : string = "localhost:3000"
  let createOrderData 

  beforeEach(async () => {
    createOrderData = {
      "payment_method": "Cash on delivery",
      "billing": {
        "first_name": "Lenoid",
        "last_name": "Shalaev",
        "city": "ekaterinburg",
        "email": "leonidShalaev@gmail.com",
        "phone": "9220213469",
      },
      "customer_note": "Домофон не работает пожалуйста позвоните по приезду",
      "shipping": {
        "address_1": "Малышева 125",
        "city": "ekaterinburg",
      },
      "line_items": [
        {
          "product_id": "396",
          "quantity": "1"
        },
        {
          "product_id": "397",
          "quantity": "1",
          "variation_id": "472"
        }
      ] 
    }

  });

  describe("create order", () => {
    it("should throw error with incorrect payment_method", () => {
      createOrderData["payment_method"] = "adsadasdas"
      return request(serverUrl)
              .post("/orders")
              .send(createOrderData)
              .expect(400)
    })
    it("should throw error with incorrect billing", () => {
      createOrderData["billing"] = {
        "badField": "badValue",
        "secondBadField": "badValue",
      }
      return request(serverUrl)
              .post("/orders")
              .send(createOrderData)
              .expect(400)
    })
    it("should throw error with incorrect shipping", () => {
      createOrderData["shipping"] = {
        "badField": "badValue",
        "secondBadField": "badValue",
      }
      return request(serverUrl)
              .post("/orders")
              .send(createOrderData)
              .expect(400)
    })
    it("should throw error with empty line_items", () => {
      createOrderData["line_items"] = []
      return request(serverUrl)
              .post("/orders")
              .send(createOrderData)
              .expect(400)
    })
    it("should throw error with incorect line_items", () => {
      createOrderData["line_items"] = [
        {
          "badField": "badValue",
          "secondBadField": "SecondBadValue"
        }
      ]
      return request(serverUrl)
              .post("/orders")
              .send(createOrderData)
              .expect(400)
    })
    it("should create order with correct data", () => {
      return request(serverUrl)
              .post("/orders")
              .send(createOrderData)
              .expect(201)
    })
  })
});
