import {
    BaseEntity,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Pessoas} from "./Pessoas";

@Entity()
export class Personals extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;

    @ManyToOne(() => Pessoas, (pessoas) => pessoas.alunos, {eager: true})
    @JoinColumn([{name: 'pessoas_id_fk', referencedColumnName: "id"}])
    pessoasIdFK: Pessoas

}