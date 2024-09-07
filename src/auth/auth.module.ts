import { UserService } from './../user/user.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './config/jwt.config';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.startegy';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User]),
    PassportModule,
    ConfigModule.forFeature(jwtConfig),
    JwtModule.
    registerAsync(jwtConfig.asProvider()), // Ensure this matches the async configuration pattern
  ],
  controllers: [AuthController],
  providers: [UserService, AuthService, LocalStrategy,JwtStrategy],
})
export class AuthModule {}
