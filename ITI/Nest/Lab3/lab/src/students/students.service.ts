import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';
import { CoursesService } from 'src/courses/courses.service';
import { Course } from 'src/courses/entities/course.entity';
import { User } from 'src/user/entities/user.entity';
import { Request as ExpressRequest, Response } from 'express';
import { UserRole } from 'src/constants/enum_constant';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(User)
    private studentRepository: Repository<User>,
    private courseService: CoursesService,
  ) { }

  // async create(createStudentDto: CreateStudentDto, res: Response) {
  //   try {
  // createStudentDto.courses = createStudentDto.courses.map(id => {
  //   const c = new Course()
  //   c.id = parseInt(id.toString())
  //   return c
  // })
  //     const student = this.studentRepository.create(createStudentDto);
  //     await this.studentRepository.save(student);
  //     return res.redirect('/students');

  //   } catch (error) {
  //     console.log(`error`, error);
  //     return res.redirect('/students/create');
  //   }
  // }

  // async goToCreate(res: Response) {
  //   const courses = await this.courseService.findAll()
  //   return res.render('students/create', { courses });
  // }

  async findAll(req: ExpressRequest, res: Response) {
    let students = await this.studentRepository.find({
      relations: {
        courses: true,
      },
    });
    students = students.map((s) => { return { ...s, isStudent: s.role === UserRole.STUDENT } })
    return res.render('students/index', {
      students,
      user: { ...req.user['payload'] },
      isAdmin: req.user['payload'].role === UserRole.ADMIN,
    });
  }

  async findOne(id: number) {
    return await this.studentRepository.findOne({
      where: {
        id,
      },
      relations: {
        courses: true,
      },
    });
  }

  async edit(id: number, res: Response) {
    const student = await this.findOne(id);
    const courses = await this.courseService.findAll();
    return res.render('students/edit', { student, courses });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto, res: Response) {
    const student = await this.findOne(id);

    updateStudentDto.courses = updateStudentDto.courses.map(id => {
      const c = new Course()
      c.id = parseInt(id.toString())
      return c
    })


    if (student)
      await this.studentRepository.save({ ...student, ...updateStudentDto });

    return res.redirect('/students');
  }

  async remove(id: number, res: Response) {
    try {
      await this.studentRepository.delete({
        id,
      });
      return res.redirect('/students');
    } catch (error) {
      console.log(`error`, error);
      return res.redirect('/students');
    }
  }
}
