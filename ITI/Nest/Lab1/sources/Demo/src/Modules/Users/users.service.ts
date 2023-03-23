import {Injectable} from '@nestjs/common'
import { User } from './users.model';
@Injectable()
export class UsersService{
    //DB ===> Static Array = [{},{}]
    // users:{id:number, name:string, age:number, email:string}[] = [];
    users:User[] = [];
    
    getAllUsers(){
        return this.users;
    }
    GetUserById(id){
        let foundUser = this.users.find((u)=>{return +u.id == +id})
        return foundUser;
    }
    AddUser(newUser:User){
        let nUser = new User(newUser.id, newUser.name, newUser.age, newUser.email);
        // this.users.push(newUser);
        this.users.push(nUser)
        return nUser;

    }
}