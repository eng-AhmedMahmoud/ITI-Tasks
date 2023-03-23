import { Injectable } from '@nestjs/common';
import { Order } from './orders.model';

@Injectable()
export class OrdersService {
    orders:Order[] = [];
    getAllOrders(){
        return this.orders;
    }
}
