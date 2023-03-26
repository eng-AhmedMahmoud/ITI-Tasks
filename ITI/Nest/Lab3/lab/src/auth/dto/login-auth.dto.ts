import { IsString, IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class LoginAuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string
}
