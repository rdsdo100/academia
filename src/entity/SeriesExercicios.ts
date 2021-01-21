import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Exercicios} from "./Exercicios";
import {Treinos} from "./Treinos";


@Entity({name: "series_Exercicios"})
export class SeriesExercicios extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    serie: number

    @Column()
    vezes: number

    @Column()
    kilos: number

    @Column()
    tempo: number

    @Column()
    interbalo: number

    @ManyToOne(() => Exercicios, (exercicios) => exercicios.seriesExercicios, {eager: true})
    @JoinColumn([{name: 'exercicios_id_fk', referencedColumnName: "id"}])
    exerciciosIdFK: Exercicios

    @ManyToOne(() => Treinos, (treinos) => treinos.seriesExercicios, {eager: true})
    @JoinColumn([{name: 'treinos_id_fk', referencedColumnName: "id"}])
    treinosIdFK: Treinos



}
