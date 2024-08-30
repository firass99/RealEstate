import { paginationDto } from './dto/pagination.dto';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { DEFAULT_PAGE_SIZE } from '../utils/constants';

@Injectable()
export class PropertyService {

  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>
  ){}

  async create(createPropertyDto: CreatePropertyDto) {
    return await this.propertyRepo.save(createPropertyDto)  }

  async findAll(paginationDto:paginationDto) {


    return await this.propertyRepo.find({
      skip:paginationDto.skip,
      take:paginationDto.limit ?? DEFAULT_PAGE_SIZE
    })
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
