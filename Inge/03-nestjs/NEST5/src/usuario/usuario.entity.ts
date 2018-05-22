import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {FotoEntity} from "../foto/foto.entity";

@Entity('web_gr2_roserom')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    apellido: string;

    @Column('int')
    edad: number;

    @OneToMany(
        type => FotoEntity,
        foto => foto.usuarioId)
    fotos: FotoEntity [];
}