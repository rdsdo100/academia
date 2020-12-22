import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class TreinosAlunos  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number
}
