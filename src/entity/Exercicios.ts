import {
    BaseEntity,
    Column,
    Entity, OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import {ExerciciosTreinos} from "./ExerciciosTreinos";

@Entity()
export class Exercicios extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column({length: 50, nullable: false})
    nome:string

    @Column({name: "exercicio_url_image" , length: 500})
    exercicioUrlImage: string

    @OneToMany(() => ExerciciosTreinos, (exerciciosTreinos) => exerciciosTreinos.exerciciosIdFK)
    exerciciosTreinos: ExerciciosTreinos[];

}
