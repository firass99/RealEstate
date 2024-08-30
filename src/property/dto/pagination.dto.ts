import { IsNumber, isNumber, IsOptional } from "class-validator";

export class paginationDto{
    @IsNumber()
    @IsOptional()
    skip: number;

    
    @IsNumber()
    @IsOptional()
    //limit max number of record
    limit:number;
}