import { IsEmail, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateUserDto {
    @IsString()
    firstName:string;
    
    @IsString()
    lastName:string;
    
    @IsString()
    @IsEmail()
    email:string;
    
    @IsOptional()
    @IsString()
    @IsUrl()
    avatarUrl:string;

    @IsString()
    password:string;

}
