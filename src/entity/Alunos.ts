import {
    BaseEntity,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

import {Pessoas} from "./Pessoas";
import {TreinosAlunos} from "./TreinosAlunos";
import {MedidasAlunos} from "./MedidasAlunos";

@Entity()
export class Alunos  extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;

    @ManyToOne(() => Pessoas, (pessoas) => pessoas.alunos, {eager: true})
    @JoinColumn([{name: 'pessoas_id_fk', referencedColumnName: "id"}])
    pessoasIdFK: Pessoas

    @OneToMany(() => TreinosAlunos, (treinosAlunos) => treinosAlunos.alunosIdFK)
    treinosAlunos: TreinosAlunos[];

    @OneToMany(() => MedidasAlunos, (medidasAlunos) => medidasAlunos.alunosIdFK)
    medidasAlunos: MedidasAlunos[];

}
