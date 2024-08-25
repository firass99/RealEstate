import { LocatorInfo } from './../../node_modules/locter/dist/locator/types.d';
import { setSeederFactory } from 'typeorm-extension';
import { PropertyFeature } from './../property-feature/entities/property-feature.entity';
import { Faker } from '@faker-js/faker';
export const PropertyFeatureFactory = setSeederFactory(PropertyFeature, (faker:Faker)=>{

    const propfeatures= new PropertyFeature();

    propfeatures.area=faker.number.int({min:25, max:2500});
    propfeatures.bathrooms=faker.number.int({min:1, max:3});
    propfeatures.bedrooms=faker.number.int({min:2, max:5});
    propfeatures.parkingSpots=faker.number.int({min:1, max:3});
    propfeatures.hasBalcony=faker.datatype.boolean();
    propfeatures.hasGardenYard=faker.datatype.boolean();
    propfeatures.hasSwimingPool=faker.datatype.boolean();

    return propfeatures;

})