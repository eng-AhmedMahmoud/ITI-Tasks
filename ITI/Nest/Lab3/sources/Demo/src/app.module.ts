import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Request, Response } from 'express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersHeaderMW } from './MiddleWares/UsersHeadersMW';
import { UsersLoggerMW } from './MiddleWares/UsersLoggerMW';
import { UsersParamsMW } from './MiddleWares/UsersParamsMW';
import { AuthModule } from './Modules/auth/auth.module';
import { OrdersModule } from './Modules/orders/orders.module';
import { ProductsModule } from './Modules/products/products.module';
import { UsersModule } from './Modules/Users/users.module';
import {APP_GUARD} from '@nestjs/core'
import { RolesGuard } from './Modules/auth/auth.guard';

@Module({
  imports: [
    UsersModule,
    OrdersModule,
    ProductsModule,
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/ITI"),
    AuthModule,
    JwtModule.register({secret:'secret', signOptions:{expiresIn:'1d'}})
    /**Modules [OrdersModule - UsersModule- ProductsModule] */
  ],
  controllers: [AppController],
  providers: [AppService,
    {provide:APP_GUARD, useClass:RolesGuard}
  ]
})
export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(UsersLoggerMW).forRoutes("users");
    consumer.apply(UsersLoggerMW).forRoutes({path:"users", method:RequestMethod.GET});
    consumer.apply(UsersParamsMW).forRoutes({path:"users/:id", method:RequestMethod.GET});
    consumer.apply(UsersHeaderMW).forRoutes({path:"users/:id", method:RequestMethod.GET});
    consumer.apply( 
            (req:Request,res:Response, next:()=>void)=>{
              console.log("End Of MiddleWares");next()
            })
            .forRoutes({path:"users/:id", method:RequestMethod.GET});
  }
}
