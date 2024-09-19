import { AuthService } from './../auth.service';
import { ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import jwtConfig from "../config/jwt.config";
import { AuthJwtPayload } from "../types/auth.jwtPayload";
import { Inject } from "@nestjs/common";

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
    @Inject(jwtConfig.KEY) private jwtConfiguration: ConfigType<typeof jwtConfig>,
    private authService:AuthService,
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConfiguration.secret,
            ignoreExpiration:false
        });
    }

    validate(payload: AuthJwtPayload){
        // Extracts and returns the user ID from the payload
            const userId= payload.sub;
            return this.authService.validateJwtUser(userId);
            }

}