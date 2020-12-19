import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Pessoas extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number
    nome: string
    sobrenome: string
    cpf: string
    dataNacimento: string
    dataCadastro: string
    ativo: boolean

}
