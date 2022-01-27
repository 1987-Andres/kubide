import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
import { MensajesService } from './mensajes/mensajes.service';
import { Mensaje } from './entities/mensaje.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'andres',
      password: 'kubide',
      database: 'kubide_api',
      entities: [__dirname + '/**/*.entity{.ts,.js}', User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensaje, User]),
    AuthModule
  ],
  controllers: [AppController, MensajesController],
  providers: [AppService, MensajesService],
})
export class AppModule { }
