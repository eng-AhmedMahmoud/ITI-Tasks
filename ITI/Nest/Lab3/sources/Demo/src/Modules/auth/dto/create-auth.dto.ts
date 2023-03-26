import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateAuthDto {
    
    @IsNotEmpty()
    @IsString()
    firstName: string;
    
    @IsNotEmpty()
    @IsString()
    lastName: string;
    
    @IsNotEmpty()
    @IsString()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    password: string;

    @IsBoolean()
    isAdmin:boolean;
}
