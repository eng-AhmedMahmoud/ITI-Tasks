import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getStudents(@Res() res: Response) {
  //   return res.render('students/index', { message: 'Hello world! Ahmed' });
  // }

  // @Get("create")
  // createStudent(@Res() res: Response) {
  //   return res.render('students/create', { message: 'Hello world! Ahmed' });
  // }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
