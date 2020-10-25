import {IsNotEmpty, IsOptional, IsString, IsEmail, IsPhoneNumber, IsIn, IsObject, IsArray,ArrayMinSize} from 'class-validator'

export class Billing {
    @IsNotEmpty()
    @IsString()
    first_name: string

    @IsOptional()
    @IsString()
    last_name: string
    
    @IsNotEmpty()
    @IsString()
    city: string

    @IsNotEmpty()
    @IsEmail()
    email: string
    
    @IsNotEmpty()
    @IsPhoneNumber("RU")
    phone: string
}
export class Shipping {
    @IsNotEmpty()
    @IsString()
    address_1: string

    @IsNotEmpty()
    @IsString()
    city: string
}
export class Product {
    @IsString()
    @IsNotEmpty()
    product_id: string

    @IsString()
    @IsNotEmpty()
    quantity: string
}
export class CreateOrderDto{
    @IsString()
    @IsIn(["Transfer on delivery","Cash on delivery"])
    payment_method: string

    @IsObject()
    billing: Billing

    @IsObject()
    shipping: Shipping

    @IsArray()
    @ArrayMinSize(1)
    line_items: Product[]

    @IsOptional()
    customer_note: string
}