import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';

@Injectable()
export class PropertyService {

  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>
  ){}

  async create(createPropertyDto: CreatePropertyDto) {
    return await this.propertyRepo.save(createPropertyDto)  }

  async findAll() {
    return await this.propertyRepo.find()
  }

  async findOne(id: number) {
    try {
        return await this.propertyRepo.findBy({'id':id})
    } catch (error) {
        return error; 
    }
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return await this.propertyRepo.update({id},updatePropertyDto);
  }

  async remove(id: number) {
    return await this.propertyRepo.delete({id});
  }
}
