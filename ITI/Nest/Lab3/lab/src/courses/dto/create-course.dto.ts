import { IsString, IsNotEmpty, Min, IsNumber, IsArray, IsOptional } from "class-validator";
import { User } from "src/user/entities/user.entity";

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
    students: User[]
}
