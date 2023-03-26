import { Controller, Get, Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { AuthRoles } from '../auth/auth.decorator';
import { Role } from '../auth/auth.enum';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService){}
    @Get()
    GetAllOrders(){
        return this.orderService.getAllOrders();
    }

    @AuthRoles(Role.Admin)
    @UsePipes(ValidationPipe)
    @Post()
    AddOrder(@Body() order){
        return this.orderService.addOrder(order);
    }
}
