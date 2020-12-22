import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import {Pessoas} from "./Pessoas";

@Entity()
export class Telefones extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    dd: string

    @Column()
    telefone: string

/*    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;*/

    @OneToMany(() => Pessoas, (pessoas) => pessoas.telefonesIdFK)
    pessoas: Pessoas[];

}
