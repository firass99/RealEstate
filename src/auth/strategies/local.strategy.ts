import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
//Strategy will xtract from request and validate it

    constructor (private authService: AuthService){
        //pass configuration object
        super(
            {
                usernameField:'email'
                /**we can use custom password  field like my passwordfield:'pass' 
                    but my passwordfield called 'password(defaultname)' so no need to define                 
                    as : passwordfield:'password'
                    **/} );}
    /**out of constructor
    async validate(email:string, password:string){
        return await this.authService.validateUser(email,password)
    }*/
    async validate(email: string, password: string) {
        //extract email& pwf from request and validate
        const user = await this.authService.validateUser(email, password);
        if (!user) {
        throw new UnauthorizedException('Invalid credentials');
        }
        console.log("return from local strategy: ", user)
        return user;}
}