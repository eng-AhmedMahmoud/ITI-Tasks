import { Controller, Request, Post, UseGuards, Get, Body, Res, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { Request as ExpressRequest, Response } from 'express';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RoleGuard } from './role/role.guard';
import { Roles } from './role/roles.decorator';
import { UserRole } from 'src/constants/enum_constant';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Get('login')
    async loginPage(@Request() req: ExpressRequest, @Res() res: Response) {
        res.cookie("access_token", "", { maxAge: 1 })
        res.render("auth/login")
    }

    @Post('login')
    async login(@Body() body: LoginAuthDto, @Res() res: Response) {
        return this.authService.login(body, res);
    }

    @Get('register')
    async registerPage(@Res() res: Response) {
        res.render("auth/register")
    }

    @Post('register')
    async register(@Body() body: CreateUserDto, @Res() res: Response) {
        return this.authService.register(body, res);
    }

    @Roles(UserRole.STUDENT)
    @UseGuards(JwtAuthGuard, RoleGuard, AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req: ExpressRequest) {
        return req.user;
    }
}
