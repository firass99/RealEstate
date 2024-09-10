import { AuthService } from './../auth.service';
import { ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import jwtConfig from "../config/jwt.config";
import { AuthJwtPayload } from "../types/auth.jwtPayload";
import { Inject } from "@nestjs/common";
import refresh_jwtConfig from "../config/refresh_jwt.config";
import { Request } from "express";

                                                 //cause  we have 2 jwt strategy we rename the strategy
export class refreshJwtStrategy extends PassportStrategy(Strategy,"refresh_jwt"){
    constructor(
        @Inject(refresh_jwtConfig.KEY) 
        private refreshJwtConfiguration: ConfigType<typeof refresh_jwtConfig> ,
        private AuthService:AuthService
    ){
        super({                         //fromBodyfield("refresh") and add a field in tha body
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: refreshJwtConfiguration.secret,
            ignoreExpiration:false,
            //to enable the validate function to access the request object
            passReqToCallback:true

        });
    }

    //if refresh token not expired we pass to validate()
    validate(req:Request, payload: AuthJwtPayload){
        const refreshToKen= req.get("authorization").replace("Bearer","").trim();
        const userId=payload.sub;
        
        return this.AuthService.validateRefreshToken(userId,refreshToKen)
    }
}