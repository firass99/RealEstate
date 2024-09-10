import { UserService } from './../user/user.service';
import { Controller, Get, HttpCode, HttpStatus, Inject, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth/jwt-auth.guard';
import { RefreshJwtGuard } from './guards/refresh_jwt/refresh_jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService:UserService
  ) {}
  

  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard) // Ensure 'local' is the correct strategy name
  @Post('login')
  async login(@Request() req){
    //access token, suer.id cause start return suer objc{id...} 
    return await this.authService.login(req.user.id);}


/*
  @UseGuards(JwtAuthGuard) 
  // Ensure 'jwt' is the correct strategy name and will return the id in user object to request 
  @Get('profile')
  getProfile(@Request() req){
    return this.userService.findOne(req.user.id)}
*/

  @UseGuards(RefreshJwtGuard) 
  // Ensure 'jwt' is the correct strategy name and will return the id in user object to request 
  @Post('refresh')
  refreshToken(@Request() req){
    return this.authService.refreshToken(req.user.id)}







}
