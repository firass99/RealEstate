import { Injectable } from '@nestjs/common';
import { CreatePropertyFeatureDto } from './dto/create-property-feature.dto';
import { UpdatePropertyFeatureDto } from './dto/update-property-feature.dto';
import { PropertyFeature } from './entities/property-feature.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyFeatureService {

  constructor(
    @InjectRepository(PropertyFeature) private featureRepo: Repository<PropertyFeature>
  ){}

  create(createPropertyFeatureDto: CreatePropertyFeatureDto) {
    return 'This action adds a new propertyFeature';
  }

  findAll() {
    return `This action returns all propertyFeature`;
  }

  findOne(id: number) {
    return `This action returns a #${id} propertyFeature`;
  }

  update(id: number, updatePropertyFeatureDto: UpdatePropertyFeatureDto) {
    return `This action updates a #${id} propertyFeature`;
  }

  remove(id: number) {
    return `This action removes a #${id} propertyFeature`;
  }
}
