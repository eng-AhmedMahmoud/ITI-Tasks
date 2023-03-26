import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './Modules/student/student.module';
import { CourseModule } from './Modules/course/course.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    StudentModule,
    CourseModule,
    MongooseModule.forRoot('mongodb://localhost:27017/School'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
