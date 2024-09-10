import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import jwtConfig from '../auth/config/jwt.config';

@Module({
  imports:[TypeOrmModule.forFeature([User]),
  PassportModule,
  ConfigModule.forFeature(jwtConfig),
],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
