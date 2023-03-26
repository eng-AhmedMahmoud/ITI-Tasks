import { IsString, IsNotEmpty, MinLength, IsNumber, Min, Max, IsArray, IsOptional, ArrayMinSize } from 'class-validator';
import { Course } from 'src/courses/entities/course.entity';

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    age: number;

    @IsArray()
    @ArrayMinSize(2)
    @IsOptional()
    courses: Course[];
}
