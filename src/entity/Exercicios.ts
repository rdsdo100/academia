import {
    BaseEntity,
    Column, CreateDateColumn,
    Entity, OneToMany,
    PrimaryGeneratedColumn, UpdateDateColumn,

} from "typeorm";
import {Treinos} from "./Treinos";

@Entity()
export class Exercicios extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column({length: 50, nullable: false})
    nome:string

    @OneToMany(() => Treinos, (treino) => treino.exerciciosIdFK)
    treino: Treinos[];

}
