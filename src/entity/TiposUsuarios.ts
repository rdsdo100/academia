import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {TreinosUsuarios} from "./TreinosUsuarios";
import {Usuarios} from "./Usuarios";

@Entity({name: 'tipos_usuarios'})
export class TiposUsuarios {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'tipo_usuario'})
    tipoUsuario: string;

    @OneToMany(() => Usuarios, (usuarios) => usuarios.tiposUsuariosIdFK)
    Usuarios: Usuarios[];
}
