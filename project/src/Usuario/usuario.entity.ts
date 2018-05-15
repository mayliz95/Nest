import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('web_persona')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    apellido: string;

    @Column('int')
    edad: number;
}