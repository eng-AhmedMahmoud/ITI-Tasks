import { IsString, IsNotEmpty, MinLength, IsNumber, Min, Max, IsArray, IsOptional } from 'class-validator';
import { Course } from 'src/courses/entities/course.entity';

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(20)
    @Max(40)
    age: number;

    @IsArray()
    @IsOptional()
    courses: Course[];
}
