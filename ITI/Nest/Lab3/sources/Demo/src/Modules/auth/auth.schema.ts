import * as mongoose from 'mongoose'
export let AuthSchema = new mongoose.Schema({
    firstName:String,
    lastName: String,
    email: String,
    password: String,
    isAdmin:Boolean
})