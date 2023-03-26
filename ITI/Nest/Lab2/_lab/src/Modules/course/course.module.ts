import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { Course } from './course.model';
import { MongooseModule } from '@nestjs/mongoose';
import { courseSchema } from './course.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'courses', schema: courseSchema }]),
  ],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
