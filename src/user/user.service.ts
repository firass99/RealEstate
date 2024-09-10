import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private userRepo: Repository<User>
  ){}

  async updateHashedRefreshToken(userId:number, hashedRefreshToken:string) {
    return this.userRepo.update({id:userId}, {hashedRefreshToken});
  }

  async create(createUserDto: CreateUserDto) {
    const usr= await this.userRepo.create(createUserDto);
    //we have to create->save, to trigger the @BeforeInsert in the user model
    return await this.userRepo.save(usr);
  }


  async findByEmail(email: string) {
    return await this.userRepo.findOne({ where: { email } });
  }

  async findAll() {
    return await this.userRepo.find();
  }

  async findOne(id: number) {
    return await this.userRepo.findOne(
      { where: { id }, select:['firstName','lastName','avatarUrl', 'hashedRefreshToken']
    });
  }
  

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOne({where:{id}});
    return await this.userRepo.save({ ...user, ...updateUserDto });  }

  async remove(id: number) {
    await this.userRepo.delete(id);  }
}
