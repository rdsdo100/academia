import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Telefones} from "./Telefones";
import {Enderecos} from "./Enderecos";
import {Pessoas} from "./Pessoas";
import {Treino} from "./Treino";

@Entity()
export class Exercicios extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    nome:string

 /*   @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;*/

    @OneToMany(() => Treino, (trino) => trino.pessoasIdFK)
    treino: Treino[];

}
