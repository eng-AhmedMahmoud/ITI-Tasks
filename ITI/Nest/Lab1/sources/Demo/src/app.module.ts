import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './Modules/orders/orders.module';
import { ProductsModule } from './Modules/products/products.module';
import { UsersModule } from './Modules/Users/users.module';

@Module({
  imports: [
    UsersModule,
    OrdersModule,
    ProductsModule
    /**Modules [OrdersModule - UsersModule- ProductsModule] */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
