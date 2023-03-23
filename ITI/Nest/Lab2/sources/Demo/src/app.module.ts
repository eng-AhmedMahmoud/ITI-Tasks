import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Request, Response } from 'express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersHeaderMW } from './MiddleWares/UsersHeadersMW';
import { UsersLoggerMW } from './MiddleWares/UsersLoggerMW';
import { UsersParamsMW } from './MiddleWares/UsersParamsMW';
import { OrdersModule } from './Modules/orders/orders.module';
import { ProductsModule } from './Modules/products/products.module';
import { UsersModule } from './Modules/Users/users.module';

@Module({
  imports: [
    UsersModule,
    OrdersModule,
    ProductsModule,
    MongooseModule.forRoot("mongodb://localhost:27017/Orders")
    /**Modules [OrdersModule - UsersModule- ProductsModule] */
  ],
  controllers: [AppController],
  providers: [AppService],
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
