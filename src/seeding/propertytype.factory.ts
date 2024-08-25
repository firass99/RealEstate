import { Faker, faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { PropertyType } from 'src/property-type/entities/property-type.entity';




export const propertyTypeSeeder = setSeederFactory(PropertyType,(faker:Faker)=>{
    const propType=new PropertyType;


    return  propType;
})