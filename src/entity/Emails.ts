import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Emails extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number
    @Column()
    email: string
}
