import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    pais: string;

    @Column()
    edad: number;

}
