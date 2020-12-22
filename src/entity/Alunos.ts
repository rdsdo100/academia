import {Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

import {Medidas} from "./Medidas";
import {Treinos} from "./Treinos";
import {Pessoas} from "./Pessoas";


@Entity()
export class Alunos {

    @PrimaryGeneratedColumn()
    id : number


    @ManyToOne(() => Medidas, (medias) => medias.alunos, {eager: true})
    @JoinColumn([{name: "medias_id_fK", referencedColumnName: "id"}])
    mediasIdFK: Medidas

    @ManyToOne(() => Treinos, (treino) => treino.alunos, {eager: true})
    @JoinColumn([{name: "treinos_id_fK", referencedColumnName: "id"}])
    treinosIdFK: Medidas

    @ManyToOne(() => Pessoas, (pessoas) => pessoas.alunos, {eager: true})
    @JoinColumn([{name: "pessoas_id_fK", referencedColumnName: "id"}])
    pessoasIdFK: Pessoas




}
