import { Module } from '@nestjs/common';
import { PropertyFeatureService } from './property-feature.service';
import { PropertyFeatureController } from './property-feature.controller';
import { PropertyFeature } from './entities/property-feature.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyFeature])],
  controllers: [PropertyFeatureController],
  providers: [PropertyFeatureService],
})
export class PropertyFeatureModule {}
