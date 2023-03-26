import { IsString, IsNotEmpty, Min, IsNumber, IsArray, IsOptional } from "class-validator";
import { Student } from "src/students/entities/student.entity";

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @Min(1)
    @IsNumber()
    @IsNotEmpty()
    duration: number;

    @IsArray()
    @IsOptional()
    students: Student[]
}
