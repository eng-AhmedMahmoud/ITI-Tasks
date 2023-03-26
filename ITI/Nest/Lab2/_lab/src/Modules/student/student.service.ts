import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
//import { Student } from './student.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentService {
  //students: CreateStudentDto[] = [];
  constructor(
    @InjectModel('students') private studentsModel,
    @InjectModel('courses') private courseModel,
  ) {}

  async create(newStd: CreateStudentDto) {
    let newStudent = new this.studentsModel(newStd);
    await newStudent.save();
    return newStudent;
  }

  async findAll() {
    let student = await this.studentsModel.find({}).exec();
    console.log(student);

    return student;
  }
  async findOne(id: number) {
    let foundStudent = await this.studentsModel.findOne({ id: id });
    return foundStudent;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    let student = await this.studentsModel.findOne({ id: id });
    if (student) {
      console.log(updateStudentDto);
      await this.studentsModel.findOneAndUpdate(
        { id: student.id },
        updateStudentDto,
      );
      return 'updated';
    } else {
      return 'invalid studentId';
    }
  }

  async remove(id: number) {
    let student = await this.studentsModel.findOne({ id: id });
    if (student) {
      await this.studentsModel.deleteOne({ id: student.id });
      return 'deleted';
    } else {
      return 'invalid studentId';
    }
  }

  async findStudentCourses(id: number) {
    let student = await this.studentsModel.findOne({ id }).exec();
    console.log(student);
    if (student) {
      let studentCourses = [];
      for (let i = 0; i < student.coursesIds.length; i++) {
        let studentCourse = await this.courseModel.findOne({
          id: student.coursesIds[i],
        });
        if (studentCourse) {
          studentCourse.studentName;
          studentCourses.push(studentCourse);
        }
      }

      return studentCourses;
    } else {
      return 'invalid studentID';
    }
  }
}
