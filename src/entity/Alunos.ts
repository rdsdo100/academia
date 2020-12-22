import {BaseEntity, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

import {Pessoas} from "./Pessoas";
import {TreinosAlunos} from "./TreinosAlunos";
import {MedidasAlunos} from "./MedidasAlunos";


@Entity()
export class Alunos  extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number


    @ManyToOne(() => Pessoas, (pessoas) => pessoas.alunos, {eager: true})
    @JoinColumn([{name: "pessoas_id_fK", referencedColumnName: "id"}])
    pessoasIdFK: Pessoas

    @OneToMany(() => TreinosAlunos, (treinosAlunos) => treinosAlunos.alunosIdFK)
    treinosAlunos: TreinosAlunos[];

    @OneToMany(() => MedidasAlunos, (medidasAlunos) => medidasAlunos.alunosIdFK)
    medidasAlunos: MedidasAlunos[];




}
