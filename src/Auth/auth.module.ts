import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './aplicacao/service/jwt.strategy';
import { JwtConfig } from './aplicacao/service/JwtConfig';

@Module({
  imports: [
    JwtModule.register({
      secret: JwtConfig.SECRET_PASS,
      signOptions: { expiresIn: "1h"}
    })
  ],
  providers: [
    JwtStrategy
  ],
})
export class AuthModule { }
