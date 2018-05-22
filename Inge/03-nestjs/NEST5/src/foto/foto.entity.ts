import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('web_gr2_roserom_foto')
export class FotoEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column('text')
    url: string;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.fotos)
    usuarioId: UsuarioEntity;
}