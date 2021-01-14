import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ExerciciosTreinos extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    observacoes: string


}
