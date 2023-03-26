import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class UsersParamsMW implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        // console.log()
        console.log(req.params.id)
        next();
    }

}