import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './auth.decorator';
import { Role } from './auth.enum';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
                private reflector: Reflector,
                private jwtService: JwtService
            ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    // console.log(requiredRoles);//[ROLES 'admin', 'inst', 'user']
    // console.log(context.switchToHttp().getRequest());
    if (!requiredRoles) {
      return true;
    }
    // const { user } = context.switchToHttp().getRequest();
    // return requiredRoles.some((role) => user.roles?.includes(role));
    //Bases on Logic ??
    //jwt [header] 
    let jwt = context.switchToHttp().getRequest().header("x-auth-token");
    //console.log(jwt);
    //==> verify(htasiiowbkasdbaskwfka)  [JwtService [inject]]
    let myDataJWT = this.jwtService.verify(jwt)
    console.log(myDataJWT);//{}
    //==> {} ==> [isAdmin]==> return true 
    if(myDataJWT.isAdmin){
        return true;
    }else{
        return false;
    }
    //==> Not Admin [undefined] ==> return false
    // return true;
  }
}



/**
 * 1- requiredRoles ==> roles[Decorator]  ==> [admin, instructor, user] if(admin){logic}
 * 2- context ==> header-cookie ==> [isAdmin] ==>return true
 */