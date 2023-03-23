import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class UsersLoggerMW implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        // console.log()
        console.log("Users Middleware Called")
        next();
    }

}