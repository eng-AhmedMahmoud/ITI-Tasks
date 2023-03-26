import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';


@Injectable()
export class AuthService {

  constructor(
                @InjectModel('auth') private AuthModel
                ,private jwtService:JwtService
              ){}

  private async findUserByEmail(email){
    let foundUser = await this.AuthModel.findOne({email:email}).exec();
    return foundUser;
  }

  async Reg(createAuthDto: CreateAuthDto) {
    //1-Check Email
    let foundUser = await this.findUserByEmail(createAuthDto.email);
    if(foundUser) return {message: "Already Exist. Please Login"};
    //2-Hash Pass [await bcrypt.genSalt(10) --> await bcrypt.hash(pass, salt)] --> Obj.password = HashedPass
    let salt = await bcrypt.genSalt(10);
    createAuthDto.password = await bcrypt.hash(createAuthDto.password, salt); 
    //3-Add to DB
    let newUser = new this.AuthModel(createAuthDto);
    await newUser.save();
    return {message:"Created Successfully", data:newUser}
  }
  
  async Login(loginAuthDto: LoginAuthDto, response:Response) {
    //1- Check Email ==> Not Exist ==> return invalid
    let foundUser = await this.findUserByEmail(loginAuthDto.email);
    if(!foundUser) return {message: "Invalid Email OR Password"};
    //2- Check Pass ==> Not True ==> return invalid
    let checkPass = await bcrypt.compare(loginAuthDto.password, foundUser.password);
    if(!checkPass) return {message: "Invalid Email OR Password"};
    //3- return Logged-In Successfully [JWT (cookie - header)]
    //JWT ==> JwtService.sign({id, name, age, .....}) 
    let myJWT = await this.jwtService.sign({name:foundUser.firstName+" "+foundUser.lastName, isAdmin:foundUser.isAdmin})
    //Response ==> [Header - Cookie] ==> response.header(key, value) ==> response.cookie(key, value)
    response.header("x-auth-token",myJWT);
    response.cookie("x-auth-token",myJWT);
    // console.log(myJWT);
    return {message: "Logged-In Successfully"}
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
