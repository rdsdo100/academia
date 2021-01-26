import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Pessoas} from "./Pessoas";
import {Usuarios} from "./Usuarios";
import {UsuariosRotas} from "./UsuariosRotas";

@Entity({name: 'rotas_permissoes'})
export class RotasPermissoes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'nome_rota' ,length: 50 , unique: true})
    nomeRota:string

    @Column({name:'caminho_rota',length: 50 , unique: true})
    caminhoRota: string


    @OneToMany(() => UsuariosRotas, (usuariosRotas) => usuariosRotas.rotasPermissoesIdFK)
    usuariosRotas: UsuariosRotas[];

}
