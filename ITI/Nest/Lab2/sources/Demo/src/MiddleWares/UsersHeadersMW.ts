import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class UsersHeaderMW implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(req.header("isAdmin"))
        if(req.header("isAdmin"))
            next();
        else
            res.send({message:"Access Denied..."})
    }

}