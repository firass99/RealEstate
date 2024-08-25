import { Injectable } from '@nestjs/common';
import { CreatePropertyTypeDto } from './dto/create-property-type.dto';
import { UpdatePropertyTypeDto } from './dto/update-property-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyType } from './entities/property-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyTypeService {

constructor(
  @InjectRepository(PropertyType) private proptypeRepo: Repository<PropertyType>
){}


  create(createPropertyTypeDto: CreatePropertyTypeDto) {
    return 'This action adds a new propertyType';
  }

  findAll() {
    return `This action returns all propertyType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} propertyType`;
  }

  update(id: number, updatePropertyTypeDto: UpdatePropertyTypeDto) {
    return `This action updates a #${id} propertyType`;
  }

  remove(id: number) {
    return `This action removes a #${id} propertyType`;
  }
}
