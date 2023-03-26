import { IsString, IsNotEmpty, MinLength, IsArray, IsOptional, ArrayMinSize, IsEmail, IsEnum } from 'class-validator';
import { UserRole } from 'src/constants/enum_constant';
import { Course } from 'src/courses/entities/course.entity';

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    age: number;

    @IsEnum(UserRole)
    @IsOptional()
    role: UserRole

    @IsArray()
    @IsOptional()
    courses: Course[];
}
