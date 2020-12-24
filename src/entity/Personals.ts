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

    @ManyToOne(() => Pessoas, (pessoas) => pessoas.alunos, {eager: true})
    @JoinColumn([{name: 'pessoas_id_fk', referencedColumnName: "id"}])
    pessoasIdFK: Pessoas

}