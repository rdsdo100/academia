import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

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

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;

}
