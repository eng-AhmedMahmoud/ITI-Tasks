import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';
// ==> localhost/3000/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}



//nest run start ==> one Time XXX
//npm run start:dev
//nest start