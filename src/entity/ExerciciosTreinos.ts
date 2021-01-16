import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Treinos} from "./Treinos";
import {SeriesTreinos} from "./SeriesTreinos";
import {Exercicios} from "./Exercicios";

@Entity({name:"exercicios_treinos"})
export class ExerciciosTreinos extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    observacoes: string

    @ManyToOne(() => Treinos, (treinos) => treinos.exerciciosTreinos, {eager: true})
    @JoinColumn([{name: 'treinos_id_fk', referencedColumnName: "id"}])
    treinosIdFK: Treinos

    @ManyToOne(() => SeriesTreinos, (seriesTreinos) => seriesTreinos.exerciciosTreinos, {eager: true})
    @JoinColumn([{name: 'series_treinos_id_fk', referencedColumnName: "id"}])
    seriesTreinosIdFK: SeriesTreinos

    @ManyToOne(() => Exercicios, (exercicios) => exercicios.exerciciosTreinos, {eager: true})
    @JoinColumn([{name: 'exercicios_id_fk', referencedColumnName: "id"}])
    exerciciosIdFK: Exercicios




}
