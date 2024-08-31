import { UserService } from './../user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {


    constructor(private userService: UserService){}

    async validateUser(email:string, password:string) {
        const user=await this.userService.findByEmail(email);

            if (!user) throw new UnauthorizedException("User not found");

        const validPassword=await compare(password, user.password);

            if (!validPassword) throw new UnauthorizedException('Invalid credentials');

            return {id: user.id};

        
    }


}
