import * as mongoose from "mongoose";

export let OrderSchema = new mongoose.Schema({
    orderId:Number,
    userId:Number,
    orderDes:String,
    totalPrice:Number
})