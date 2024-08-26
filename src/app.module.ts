import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyModule } from './property/property.module';
import { PropertyFeatureModule } from './property-feature/property-feature.module';
import { PropertyTypeModule } from './property-type/property-type.module';
import { UserModule } from './user/user.module';
import { dbConfig } from './config/dbConfig';

@Module({
  imports: [PropertyModule, 
    TypeOrmModule.forRoot(dbConfig), PropertyFeatureModule, UserModule, PropertyTypeModule

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
