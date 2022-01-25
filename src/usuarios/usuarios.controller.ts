import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario-dto';

@Controller('usuarios')
export class UsuariosController {

    @Post()
    create(@Body() createUsuarioDto: CreateUsuarioDto) {
        return 'usuario creado';
    }

    @Get()
    getAll() {
        return 'todos los usuarios';
    }

    @Put(':id')
    update(@Body() updateUsuarioDto: CreateUsuarioDto) {
        return 'usuario actualizado'
    }

    @Delete(':id')
    delete() {
        return 'mensaje eliminado'
    }
}
