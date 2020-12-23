import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Personal extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number
}