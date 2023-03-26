import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ) { }

  async create(createStudentDto: CreateStudentDto) {
    return await this.studentRepository.save(createStudentDto);
  }

  async findAll() {
    return await this.studentRepository.find({
      relations: {
        courses: true
      }
    });
  }

  async findOne(id: number) {
    return await this.studentRepository.findOne({
      where: {
        id
      },
      relations: {
        courses: true
      }
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.findOne(id);

    if (!student) {
      return null;
    }

    return this.studentRepository.save({ ...student, ...updateStudentDto })
  }

  async remove(id: number) {
    return await this.studentRepository.delete({
      id
    });
  }
}
