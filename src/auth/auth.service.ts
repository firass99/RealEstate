import { IsEmail } from 'class-validator';
import { UserService } from './../user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload } from './types/auth.jwtPayload';

@Injectable()
export class AuthService {


    constructor(private userService:UserService, private jwtService:JwtService){}

    async validateUser(email:string, password:string) {
        const user=await this.userService.findByEmail(email);
        if (!user){
            throw new UnauthorizedException("User not found");}

        const validPassword=await compare(password, user.password);
        if (!validPassword){
            throw new UnauthorizedException('Invalid credentials');}
        return user.id;
    }
    
    login(userId: number) {
        const payload: AuthJwtPayload = { sub: userId };
        return {
            //no need to add secretkey  cause we set up in jwtconfigOption /config
            access_token: this.jwtService.sign(payload)
        };
    }
    


    
}
