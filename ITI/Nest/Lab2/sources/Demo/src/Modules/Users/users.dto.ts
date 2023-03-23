import { IsNotEmpty, IsNumber, IsString, IsEmail, Min, Max, Length } from "class-validator";

export class UserWithDTO{
    @IsNotEmpty()
    @IsNumber()
    id:number;

    @IsNotEmpty()
    @IsString()
    @Length(3,50)
    name:string;

    @IsNotEmpty()
    @IsNumber()
    @Min(20)
    @Max(40)
    age:number;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email:string;
}