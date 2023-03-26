import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './auth.schema';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports: [
    MongooseModule.forFeature( [{name:"auth", schema:AuthSchema}] ),
    JwtModule.register({secret:'secret', signOptions:{expiresIn:'1d'}})
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
