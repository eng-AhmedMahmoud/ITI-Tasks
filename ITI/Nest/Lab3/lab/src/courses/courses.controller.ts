import { Controller, Get, Post, Body, UseGuards, Patch, Param, Delete } from '@nestjs/common';
import { Student } from 'src/students/entities/student.entity';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { RoleGuard } from '../auth/role/role.guard';
import { Roles } from '../auth/role/roles.decorator';
import { UserRole } from 'src/constants/enum_constant';
import { AuthGuard } from '@nestjs/passport';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard, AuthGuard('jwt'))
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    const student = new Student()
    student.age = 20;
    student.name = "John Doe";
    return this.coursesService.create(createCourseDto);
  }

  @Roles(UserRole.STUDENT, UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard, AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Roles(UserRole.STUDENT, UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard, AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @Roles (UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard, AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Roles (UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard, AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
