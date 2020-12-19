import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Aluno extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number
    pessoa: string
    endereco: string
    telefone: string
    email: string


}
