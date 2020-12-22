import {
    BaseEntity,
    Column,
    Entity, OneToMany,
    PrimaryGeneratedColumn,

} from "typeorm";
import {Alunos} from "./Alunos";
import {Treinos} from "./Treinos";


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

    @OneToMany(() => Treinos, (treino) => treino.exerciciosIdFK)
    treino: Treinos[];

}
