import { IsNumber } from 'class-validator';
import {
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
} from '@nestjs/class-validator';

export class CreateCourseDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  duration: number;
  @IsString()
  @IsNotEmpty()
  @Length(10, 20)
  description: string;
}
