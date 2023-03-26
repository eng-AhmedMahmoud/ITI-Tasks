import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { studentSchema } from './student.schema';
import { courseSchema } from '../course/course.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'students', schema: studentSchema }]),
    MongooseModule.forFeature([{ name: 'courses', schema: courseSchema }]),
  ],

  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
