import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Enderecos extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number
    cep : string
    logradouro : string
    complemento : string
    bairro : string
    localidade: string
    uf: string
    ibge : string
    numero: string

}
