import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Res,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }
  @UsePipes(ValidationPipe)
  @Get()
  findAll() {
    return this.studentService.findAll();
  }
  //
  @UsePipes(ValidationPipe)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.studentService.findOne(id);
  }
  @Get(':id/courses')
  async findCourses(@Param('id', ParseIntPipe) id) {
    return await this.studentService.findStudentCourses(id);
  }
  //
  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentService.update(id, updateStudentDto);
  }
  @UsePipes(ValidationPipe)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    return this.studentService.remove(id);
  }
}

/* 
@Controller('student')
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.StudentService.create(createStudentDto);
  }
  @UsePipes(ValidationPipe)
  @Get()
  findAll() {
    return this.StudentService.findAll();
  }

  @UsePipes(ValidationPipe)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.StudentService.findOne(+id);
  }
  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id,
    @Body() UpdateStudentDto: UpdateStudentDto,
  ) {
    return this.StudentService.update(+id, UpdateStudentDto);
  }
  @UsePipes(ValidationPipe)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.StudentService.remove(+id);
  }
}
 */
