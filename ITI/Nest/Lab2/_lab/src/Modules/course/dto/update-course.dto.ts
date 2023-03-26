import { PartialType } from '@nestjs/mapped-types';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
} from '@nestjs/class-validator';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  id: number;
  @IsString()
  name: string;
  @IsNumber()
  @IsPositive()
  duration: number;
  @IsString()
  @Length(0, 20)
  description: string;
}
