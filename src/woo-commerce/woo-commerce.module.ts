import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { Module, Global } from '@nestjs/common';

const WooCommerceProvider = {
            provide: "WooCommerceRestApi",
            useFactory: () => {
                return new WooCommerceRestApi({
                    url: process.env.WC_URL,
                    consumerKey: process.env.WC_PUBLIC_KEY,
                    consumerSecret: process.env.WC_PRIVATE_KEY,
                    version: "wc/v3",
                    queryStringAuth: true,
                })
            },
        }
@Global()
@Module({
    providers: [
        WooCommerceProvider,
    ],
    exports: ['WooCommerceRestApi']
})
export class WooCommerceModule {}