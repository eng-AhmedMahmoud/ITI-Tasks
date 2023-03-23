import {Controller, Get, Post,ParseIntPipe, Delete, Put, Patch, Body, UsePipes, ValidationPipe, Param} from '@nestjs/common'
import { UserWithDTO } from './users.dto';
import { User } from './users.model';
import { UsersService } from './users.service'
@Controller('/users')
export class UsersController{
    constructor(private readonly userService: UsersService){}
    @Get()
    Users(){
        return this.userService.getAllUsers();
    }
    @Get(":id")
    findUser(@Param("id",ParseIntPipe) id ){
        return this.userService.GetUserById(id);
    }

    @UsePipes(ValidationPipe)
    @Post()
    AddUser(
            @Body() body:UserWithDTO
            // @Body('id') ID,
            // @Body('name') name,
            // @Body('age') AGE,
            // @Body('email') EMAIL
        ){
        return this.userService.AddUser(body)
    }
}





