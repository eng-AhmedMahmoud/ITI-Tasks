import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Response } from 'express';
import { Url } from 'url';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
    ) { }

    //#region private methods

    private async hashPassword(pass: string) {
        return await bcrypt.hash(pass, 10);
    }

    private async isMatchPass(pass: string, hash: string) {
        return bcrypt.compare(pass, hash);
    }

    private async validateUser(loginAuthDto: LoginAuthDto): Promise<User> {
        const user = await this.usersService.findOneByEmail(loginAuthDto.email);

        if (
            user &&
            (await this.isMatchPass(loginAuthDto.password, user.password))
        ) {
            return user;
        }
        return null;
    }

    private createToken(user: User, res: Response) {
        const payload = {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        };
        const access_token = this.jwtService.sign(payload)

        res.cookie('access_token', access_token, {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        });

        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }

    //#endregion 

    async login(loginAuthDto: LoginAuthDto, res: Response) {
        const user = await this.validateUser(loginAuthDto);

        if (!user) {
            res.render("auth/login", { error: "wrong credentials!" })
        } else {
            const payload = this.createToken(user, res)
            // res.render("students/index", { payload })
            res.redirect("../students")
        }
    }

    async register(createUserDto: CreateUserDto, res: Response) {
        const user = await this.usersService.findOneByEmail(createUserDto.email);
        if (user) {
            res.render("auth/register", { error: "Email is already exist!" })
        } else {
            createUserDto.password = await this.hashPassword(createUserDto.password);
            let response = await this.usersService.create(createUserDto);
            if (response) {
                const payload = this.createToken(response, res);
                // res.render("students/index", { payload, isAdmin: (payload.user.role === "ADMIN") })
                res.redirect("/students")
            }
        }
    }
}
