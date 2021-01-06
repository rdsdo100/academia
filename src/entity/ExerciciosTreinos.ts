import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ExerciciosTreinos {

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


}
