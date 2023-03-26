import { Document } from "mongoose";

export interface IOrder extends Document{
    orderId:number;
    userId:number;
    orderDes:string
    totalPrice:number
}