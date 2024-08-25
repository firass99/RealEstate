import {  IsBoolean, IsNumber } from "class-validator";

export class CreatePropertyFeatureDto {

    @IsNumber()
    parkingSpots:number;

    @IsNumber()
    area:number;

    @IsBoolean({message:"not a boolean"})
    hasSwimingPool:boolean;
    
    @IsBoolean()
    hasGardenYard:boolean;
    
    @IsBoolean()
    hasBalcony:boolean;
    
}
