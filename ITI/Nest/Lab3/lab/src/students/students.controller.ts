import { Controller, Get, Post, Body, UseGuards, Param, Request, Res } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { RoleGuard } from '../auth/role/role.guard';
import { Roles } from '../auth/role/roles.decorator';
import { UserRole } from 'src/constants/enum_constant';
import { AuthGuard } from '@nestjs/passport';
import { Request as ExpressRequest, Response } from 'express';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  // @Post()
  // create(@Body() createStudentDto: CreateStudentDto, @Res() res: Response) {
  //   return this.studentsService.create(createStudentDto, res);
  // }

  // @Get("create")
  // goToCreate(@Res() res: Response) {
  //   return this.studentsService.goToCreate(res);
  // }

  @Roles(UserRole.STUDENT, UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard, AuthGuard('jwt'))
  @Get()
  findAll(@Request() req: ExpressRequest, @Res() res: Response) {
    return this.studentsService.findAll(req, res);
  }

  @Roles(UserRole.STUDENT, UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard, AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard, AuthGuard('jwt'))
  @Get('edit/:id')
  edit(@Param('id') id: string, @Res() res: Response) {
    return this.studentsService.edit(+id, res);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard, AuthGuard('jwt'))
  @Post('edit/:id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto, @Res() res: Response) {
    return this.studentsService.update(+id, updateStudentDto, res);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard, AuthGuard('jwt'))
  @Get('delete/:id')
  remove(@Param('id') id: string, @Res() res: Response) {
    return this.studentsService.remove(+id, res);
  }
}
