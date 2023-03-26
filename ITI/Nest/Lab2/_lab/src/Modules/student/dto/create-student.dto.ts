import { IsNotEmpty } from '@nestjs/class-validator';
import { IsPositive } from '@nestjs/class-validator';
import { Length } from '@nestjs/class-validator';
import { IsArray } from '@nestjs/class-validator';
import { IsNumber } from '@nestjs/class-validator';
import { IsString } from '@nestjs/class-validator';

export class CreateStudentDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsNotEmpty()
  @Length(5, 10)
  name: string;
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  age: number;
  @IsArray()
  @IsNotEmpty()
  coursesIds: number[];
}
