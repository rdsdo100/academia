import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {TreinosUsuarios} from "./TreinosUsuarios";
import {Usuarios} from "./Usuarios";

@Entity({name: 'tipos_usuarios'})
export class TiposUsuarios extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'tipo_usuario'})
    tipoUsuario: string;

    @OneToMany(() => Usuarios, (usuarios) => usuarios.tiposUsuariosIdFK)
    Usuarios: Usuarios[];
}
