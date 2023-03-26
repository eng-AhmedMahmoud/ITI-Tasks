import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
//import { Course } from './course.model';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class CourseService {
  //courses: CreateCourseDto[] = [];
  constructor(@InjectModel('courses') private coursesModel) {}
  create(newC: CreateCourseDto) {
    let newCourse = new this.coursesModel(newC);
    newCourse.save();
    console.log(newCourse);
    return newCourse;
  }

  async findAll() {
    let course = await this.coursesModel.find({}).exec();
    console.log(course);

    return course;
  }

  async findOne(id: number) {
    let foundCourse = await this.coursesModel.findOne({ id: id });
    return foundCourse;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    let course = await this.coursesModel.findOne({ id: id });
    if (course) {
      console.log(updateCourseDto);
      await this.coursesModel.findOneAndUpdate(
        { id: course.id },
        updateCourseDto,
      );
      return 'updated';
    } else {
      return 'invalid courseId';
    }
  }

  async remove(id: number) {
    let course = await this.coursesModel.findOne({ id: id });
    if (course) {
      await this.coursesModel.deleteOne({ id: course.id });
      return 'deleted';
    } else {
      return 'invalid courseID';
    }
  }
}
