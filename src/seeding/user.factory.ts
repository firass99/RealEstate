import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { User } from "../user/entities/user.entity";

//export objcet..
export const userFactory = setSeederFactory(User,(faker:Faker)=>{
    const user=new User();

    user.firstName=faker.person.firstName();
    user.lastName=faker.person.lastName();
    user.email=faker.internet.email();
    user.avatarUrl=faker.image.avatar();
    
    return user;
})