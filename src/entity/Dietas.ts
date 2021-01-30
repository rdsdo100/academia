import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Dietas extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
}
