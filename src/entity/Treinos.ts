import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn

} from "typeorm";

import {TreinosAlunos} from "./TreinosAlunos";
import {SeriesExercicios} from "./SeriesExercicios";

@Entity()
export class Treinos extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    nome:string

    @Column()
    observacoes: string

    @OneToMany(() => TreinosAlunos, (treinosAlunos) => treinosAlunos.treinosIdFK)
    treinosAlunos: TreinosAlunos[];

    @OneToMany(() => SeriesExercicios, (seriesExercicios) => seriesExercicios.exerciciosIdFK)
    seriesExercicios: SeriesExercicios[];

}
