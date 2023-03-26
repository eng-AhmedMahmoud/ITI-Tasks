import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>
  ) { }

  async create(createCourseDto: CreateCourseDto) {
    return await this.courseRepository.save(createCourseDto);
  }

  async findAll() {
    return await this.courseRepository.find({
      relations: {
        students: true
      }
    });
  }

  async findOne(id: number) {
    return await this.courseRepository.findOne({
      where: {
        id
      },
      relations: {
        students: true
      }
    });
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.findOne(id);
    if (!course) {
      return null;
    }
    return await this.courseRepository.save(updateCourseDto);
  }

  async remove(id: number) {
    return await this.courseRepository.delete({
      id
    });
  }
}
