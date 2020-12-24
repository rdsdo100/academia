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

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;

    @OneToMany(() => Treinos, (treino) => treino.exerciciosIdFK)
    treino: Treinos[];

}
