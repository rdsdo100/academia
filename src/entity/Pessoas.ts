import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Pessoas extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    nome: string
    @Column()
    sobrenome: string
    @Column()
    cpf: string
    @Column()
    dataNacimento: string
    @Column()
    dataCadastro: string
    @Column()
    ativo: boolean

}
