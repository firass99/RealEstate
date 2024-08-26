import { Faker } from "@faker-js/faker";
import { PropertyFeature } from "../property-feature/entities/property-feature.entity";
import { setSeederFactory } from "typeorm-extension";

export const propertyFeatureFactory = setSeederFactory(PropertyFeature, (faker:Faker)=>{

    const propfeatures= new PropertyFeature();

    propfeatures.bedrooms=faker.number.int({min:2, max:5});
    propfeatures.bathrooms=faker.number.int({min:1, max:3});
    propfeatures.parkingSpots=faker.number.int({min:1, max:3});    
    propfeatures.area=faker.number.int({min:25, max:2500});
    propfeatures.hasSwimingPool=faker.datatype.boolean();
    propfeatures.hasGardenYard=faker.datatype.boolean();
    propfeatures.hasBalcony=faker.datatype.boolean();

    return propfeatures;

})