import {  Faker } from "@faker-js/faker";
import { Property } from "../property/entities/property.entity";
import { setSeederFactory } from "typeorm-extension";

export const propertyFactory=setSeederFactory (Property, (faker:Faker)=>{
    const property=new Property();

    property.name=faker.location.street();
    property.price=+faker.commerce.price({min:1000,max:10000});
    property.description=faker.lorem.sentence({min:3, max:10});

    return property;
})