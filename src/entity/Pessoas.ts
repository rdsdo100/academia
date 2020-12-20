import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

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

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;

}
