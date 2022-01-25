import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nick: string;

    @Column()
    mensaje: string;

}
