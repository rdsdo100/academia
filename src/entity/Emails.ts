import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Pessoas} from "./Pessoas";

@Entity()
export class Emails extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    email: string

    @OneToMany(() => Pessoas, (pessoas) => pessoas.emailsIdFK)
    pessoas: Pessoas[];
}
