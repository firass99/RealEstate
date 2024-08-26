import { faker } from "@faker-js/faker";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Property } from '../property/entities/property.entity';
import { PropertyFeature } from '../property-feature/entities/property-feature.entity';
import { PropertyType } from '../property-type/entities/property-type.entity';
import { User } from '../user/entities/user.entity';


export class MainSeeder implements Seeder{
    public async run(dbConfig:DataSource, factoryManager:SeederFactoryManager) : Promise<any>{
            /// datasource to access the entity repos, factory

            //no need for rep injection
            const TypeRepo=dbConfig.getRepository(PropertyType);
            console.log("Seeding proprety types...");
            const propertyTypes= await TypeRepo.save([
                {value:'hello'}, {value:'appartment'}
            ])

            //simple kinda seeders
            const userFactory=factoryManager.get(User);
            console.log("Seeding Users types...");
            const users=await userFactory.saveMany(10);

            //in case of complexe seeders we have to initilize property entity then init propfeat & type
            //list of promisses then map each of the list, then create property seeders
            const propertyFactory = factoryManager.get(Property);
            const propertyFeatureFactory = factoryManager.get(PropertyFeature);

            const properties=await Promise.all(
                Array(50)
                .fill('')
                .map( async()=>{
                        const property=await propertyFactory.make({//make : dont save
                            //choose randomly fom users we created above
                            user: faker.helpers.arrayElement(users),
                            type: faker.helpers.arrayElement(propertyTypes),
                            propertyFeature:await propertyFeatureFactory.save()                        
                        })
                        console.log("Seeding proprety features types...");
                        return property;
                    })
            )
            console.log("Seeding proprety types...");
            //after promise.all we save prop
            const propertyRepo= dbConfig.getRepository(Property)
            await propertyRepo.save(properties);
    }
    
}