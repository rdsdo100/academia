import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Emails extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number
    email: ''
}
