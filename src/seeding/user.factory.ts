import { isEmail } from './../../node_modules/@types/validator/index.d';
import { fa, faker, Faker } from "@faker-js/faker";
import { User } from "src/user/entities/user.entity";
import { setSeederFactory } from "typeorm-extension";

//export objcet..
export const userFactory = setSeederFactory(User,(faker:Faker)=>{
    const user=new User();

    user.firstName=faker.name.firstName();
    user.lastName=faker.name.lastName();
    user.email=faker.internet.email();
    user.avatarUrl=faker.image.avatar();
    
    return user;
})