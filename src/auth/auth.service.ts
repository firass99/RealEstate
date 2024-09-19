import { UserService } from './../user/user.service';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload } from './types/auth.jwtPayload';
import { ConfigType } from '@nestjs/config';
import refreshJwtConfig from './config/refresh_jwt.config';
import * as argon2 from 'argon2';
import { CurrentUser } from './types/currentuser';



@Injectable()
export class AuthService {

    constructor(
        //injections
        private userService:UserService,
        private jwtService:JwtService,
        @Inject(refreshJwtConfig.KEY) private refreshTokenConfig:ConfigType<typeof refreshJwtConfig>
    ){}

    async validateUser(email:string, password:string) {
        const user=await this.userService.findByEmail(email);
        if (!user){
            throw new UnauthorizedException("User not found");}

        const validPassword=await compare(password, user.password);
        if (!validPassword){
            throw new UnauthorizedException('Invalid credentials');}
        return user;}
    

    async login(userId: number) {
        const {accessToken, refreshToken}= await this.generateToken(userId);
        const hashedRefreshToken =await argon2.hash(refreshToken)
        
        await this.userService.updateHashedRefreshToken(userId, hashedRefreshToken);

        return {
            userId,
            accessToken,
            refreshToken
        }};


    async generateToken(userId: number){
        const payload:AuthJwtPayload={sub:userId};
        const [accessToken, refreshToken]=await Promise.all([
            this.jwtService.sign(payload),
            this.jwtService.sign(payload,this.refreshTokenConfig)
        ])

        return {
            accessToken,
            refreshToken
        }}


    /*used in refresh controller and 
    will generate 2 new tokens with the update of rfrshtoken liek login*/
    async refreshToken(userId: number){
        const {accessToken, refreshToken}= await this.generateToken(userId);
        const hashedRefreshToken =await argon2.hash(refreshToken)
        
        await this.userService.updateHashedRefreshToken(userId, hashedRefreshToken);

        return {
            userId,
            accessToken,
            refreshToken
        }
    }


    //used in the strategy
    async validateRefreshToken(userId: number, refreshToken: string) {
        const user = await this.userService.findOne(userId);
            //if user delted || logout
        if (!user || !user.hashedRefreshToken)
            throw new UnauthorizedException('Invalid Refresh Token');
    
        const refreshTokenMatches = await argon2.verify(
            user.hashedRefreshToken,
            refreshToken,
        );
        if (!refreshTokenMatches)
            throw new UnauthorizedException('Invalid Refresh Token');
    
        return { id: userId };
    }

    async logout(userId:number){
        await this.userService.updateHashedRefreshToken(userId,null);
    }


    async validateJwtUser(userId: number) {
        const user = await this.userService.findOne(userId);
        if (!user) throw new UnauthorizedException('User not found!');
        const currentUser: CurrentUser = { id: user.id, role: user.role };
        return currentUser;
    }
    



























    
}


