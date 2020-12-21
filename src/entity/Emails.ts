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

 /*   @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;*/

    @OneToMany(() => Pessoas, (pessoas) => pessoas.emailsIdFK)
    pessoas: Pessoas[];
}
