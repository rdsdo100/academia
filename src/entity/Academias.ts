import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Usuarios} from "./Usuarios";

@Entity()
export class Academias extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'nome_fantazia' , length: 60})
    nomeFantazia: string

    @Column({name:'nome_razao_social' , length: 60})
    nomeRazaoSocial: string

    @OneToMany(() => Usuarios, (usuarios) => usuarios.academiasIdFK)
    usuarios: Usuarios[];

}
