import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import { Logger } from '@nestjs/common';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);

    return this.appService.create({
      name,
      email,
      password: hashedPassword
    });
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    const user = await this.appService.findOne({ email });

    if (!user) {
      throw new BadRequestException('Usuario y/o contraseña incorrectos');
    }

    let iguales = bcrypt.compareSync(password, user.password);
    Logger.log(iguales)
    if (!iguales) {
      throw new BadRequestException('Usuario y/o contraseña incorrectos');
    }
    return user;
  }

}
