import {
    BaseEntity,
    Column,
    Entity, OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import {SeriesExercicios} from "./SeriesExercicios";


@Entity()
export class Exercicios extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column({length: 50, nullable: false})
    nome:string

    @Column({name: "exercicio_url_image" , length: 500})
    exercicioUrlImage: string

    @OneToMany(() => SeriesExercicios, (seriesExercicios) => seriesExercicios.exerciciosIdFK)
    seriesExercicios: SeriesExercicios[];

}
