import { PartialType } from '@nestjs/mapped-types';
import {
  IsArray,
  IsNotEmpty,
  IsPositive,
  IsString,
} from '@nestjs/class-validator';
import { IsNumber } from 'class-validator';

import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  id: number;
  @IsString()
  name: string;
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  age: number;
  @IsArray()
  @IsNotEmpty()
  coursesIds: number[];
}
