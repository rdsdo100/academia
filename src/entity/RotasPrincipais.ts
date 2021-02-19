import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

import {RotasPermissoes} from "./RotasPermissoes";


@Entity()
export class RotasPrincipais {


    @PrimaryGeneratedColumn()
    id: number;

    @Column( {name:'' , length: 50, unique: true , nullable:false})
    nomeRota: string

    @OneToMany(() => RotasPermissoes, (rotasPermissoes) => rotasPermissoes.rotas_principais_id_fk)
    rotasPermissoes: RotasPermissoes[];



}
