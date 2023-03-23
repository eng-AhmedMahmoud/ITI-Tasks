import { All, Injectable } from '@nestjs/common';
// import { Order } from './orders.model';
import {InjectModel } from '@nestjs/mongoose'

@Injectable()
export class OrdersService {
    // orders:Order[] = [];
    constructor(@InjectModel('orders') private OrderModel){}
    
    async getAllOrders(){
        let AllOrders = await this.OrderModel.find({},{__v:false}).exec()
        return AllOrders;
    }


    async addOrder(order){
        var newOrder = new this.OrderModel(order);
        await newOrder.save();
        return newOrder;
    }
}
