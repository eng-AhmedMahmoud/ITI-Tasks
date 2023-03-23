import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService){}
    @Get()
    GetAllOrders(){
        return this.orderService.getAllOrders();
    }
}
