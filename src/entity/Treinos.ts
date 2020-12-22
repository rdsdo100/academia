import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Exercicios} from "./Exercicios";
import {Pessoas} from "./Pessoas";
import {Alunos} from "./Alunos";

@Entity()
export class Treinos extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    serie: number

    @Column()
    vezes: number

    @Column()
    kilos: number

    @Column()
    tempo: number

    @Column()
    observacoes: string

/*    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;*/

    @ManyToOne(() => Exercicios, (exercicios) => exercicios.treino, {eager: true})
    @JoinColumn([{name: "exercicios_id_fK", referencedColumnName: "id"}])
    exerciciosIdFK: Pessoas

    @OneToMany(() => Alunos, (alunos) => alunos.treinosIdFK)
    alunos: Alunos[];

}
