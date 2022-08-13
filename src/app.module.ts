import { EmailController } from './Email/Aplicacao/controller/email.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [
    EmailController, AppController],
  providers: [AppService],
})
export class AppModule { }
