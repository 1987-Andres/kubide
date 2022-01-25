import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from 'src/mensajes/entities/mensaje.entity';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Injectable()
export class MensajesService {

    constructor(
        @InjectRepository(Mensaje)
        private readonly MensajeRepository: Repository<Mensaje>,
    ) { }

    async getAll() {
        return await this.MensajeRepository.find();
    }

    async createMensaje(mensajeNuevo: CreateMensajeDto) {
        const nuevo = new Mensaje();
        nuevo.mensaje = mensajeNuevo.mensaje;
        nuevo.nick = mensajeNuevo.nick;

        return this.MensajeRepository.save(nuevo);
    }

    async updateMensaje(idMensaje: number, mensajeActualizar: CreateMensajeDto) {
        const mensajeUpdate = await this.MensajeRepository.findOne(idMensaje);
        mensajeUpdate.nick = mensajeActualizar.nick;
        mensajeUpdate.mensaje = mensajeActualizar.mensaje;

        return await this.MensajeRepository.save(mensajeUpdate);
    }

    async deleteMensaje(idMensaje: number) {
        return await this.MensajeRepository.delete(idMensaje)
    }

}
