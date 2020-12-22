import {BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

import {Pessoas} from "./Pessoas";


@Entity()
export class Alunos  extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number


    @ManyToOne(() => Pessoas, (pessoas) => pessoas.alunos, {eager: true})
    @JoinColumn([{name: "pessoas_id_fK", referencedColumnName: "id"}])
    pessoasIdFK: Pessoas




}
