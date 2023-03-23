import {Controller, Get, Post, Delete, Put, Patch, Body} from '@nestjs/common'
import { User } from './users.model';
import { UsersService } from './users.service'
@Controller('/users')
export class UsersController{
    constructor(private readonly userService: UsersService){}
    @Get()
    Users(){
        return this.userService.getAllUsers();
    }

    @Post()
    AddUser(
            // @Body() body:User
            @Body('id') ID,
            @Body('name') name,
            @Body('age') AGE,
            @Body('email') EMAIL
        ){
        return this.userService.AddUser({id:ID, name, age:AGE, email:EMAIL})
    }
}