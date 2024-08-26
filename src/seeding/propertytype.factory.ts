import { Faker, faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { PropertyType } from '../property-type/entities/property-type.entity';


export const propertyTypeFactory = setSeederFactory(PropertyType,(faker:Faker)=>{
    const propType=new PropertyType();
    return  propType;
})