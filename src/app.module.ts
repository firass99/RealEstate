import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyModule } from './property/property.module';
import { PropertyFeatureModule } from './property-feature/property-feature.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PropertyModule, TypeOrmModule.forRoot({ 
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'admin',
    password:'admin',
    database:'postgres',
    autoLoadEntities:true,
    //only in dev mode/phase:
    synchronize:true
  }), PropertyFeatureModule, UserModule

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
