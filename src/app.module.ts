import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyModule } from './property/property.module';
import { PropertyFeatureModule } from './property-feature/property-feature.module';
import { PropertyTypeModule } from './property-type/property-type.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/dbConfig';
import dbConfigProduction from './config/db.config.production';

@Module({
  imports: [
    ConfigModule.forRoot({
      //usgin config globaly
      isGlobal:true,

      //expension
      expandVariables:true,
      //load config file
      load:[dbConfig] 
    }),
    TypeOrmModule.forRootAsync({ 
      useFactory:process.env.NODE_ENV==="production"? dbConfigProduction:dbConfig 
    }),
    PropertyModule, PropertyFeatureModule, UserModule, PropertyTypeModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
