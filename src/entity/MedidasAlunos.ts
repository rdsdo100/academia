import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class MedidasAlunos  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number
}
