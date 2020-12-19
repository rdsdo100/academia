import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Enderecos extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number
    @Column()
    cep : string
    @Column()
    logradouro : string
    @Column()
    complemento : string
    @Column()
    bairro : string
    @Column()
    localidade: string
    @Column()
    uf: string
    @Column()
    ibge : string
    @Column()
    numero: string

}
