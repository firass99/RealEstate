import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyModule } from './property/property.module';
import { PropertyFeatureModule } from './property-feature/property-feature.module';
import { PropertyTypeModule } from './property-type/property-type.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import dbConfig from './config/dbConfig';
import dbConfigProduction from './config/db.config.production';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({ 
      useFactory:process.env.NODE_ENV==="production"? dbConfigProduction:dbConfig 
    }),
    ConfigModule.forRoot({      
      envFilePath: '.env',
      isGlobal:true,//using config globaly
      expandVariables:true,//expension
      load:[dbConfig], //load config file
    }),
    UserModule,
     AuthModule, PropertyModule, PropertyFeatureModule,  PropertyTypeModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
