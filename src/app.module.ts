import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosController } from './usuarios/usuarios.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3006,
      username: 'andres',
      password: 'kubide',
      autoLoadEntities: true
    })
  ],
  controllers: [AppController, UsuariosController],
  providers: [AppService],
})
export class AppModule { }
