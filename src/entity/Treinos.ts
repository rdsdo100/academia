import {
    BaseEntity,
    Column,
    Entity, JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,

} from "typeorm";
import {Exercicios} from "./Exercicios";
import {Pessoas} from "./Pessoas";
import {TreinosAlunos} from "./TreinosAlunos";

@Entity()
export class Treinos extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    nome:string

    @Column()
    observacoes: string

    /*@ManyToOne(() => Exercicios, (exercicios) => exercicios.treino, {eager: true})
    @JoinColumn([{name: "exercicios_id_fK", referencedColumnName: "id"}])
    exerciciosIdFK: Pessoas*/

    @OneToMany(() => TreinosAlunos, (treinosAlunos) => treinosAlunos.treinosIdFK)
    treinosAlunos: TreinosAlunos[];

}
