import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ExerciciosTreinos} from "./ExerciciosTreinos";

@Entity({name: "series_treinos"})
export class SeriesTreinos extends BaseEntity {

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

    @OneToMany(() => ExerciciosTreinos, (exerciciosTreinos) => exerciciosTreinos.seriesTreinosIdFK)
    exerciciosTreinos: ExerciciosTreinos[];


}
