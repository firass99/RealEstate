import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategies extends PassportStrategy(Strategy){


    constructor (private authService: AuthService){
        //pass configuration object
        super(
            {
                usernameField:'email'
                /**we can use custom password  field like my passwordfield:'pass' 
                    but my passwordfield called 'password(defaultname)' so no need to define                 
                    as : passwordfield:'password'
                    **/} );}

            
    //out of constructor
    validate(email:string, password:string){
        return this.authService.validateUser(email,password)
    }

}