import {
    BaseEntity,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Alunos} from "./Alunos";
import {Treinos} from "./Treinos";

@Entity()
export class TreinosAlunos  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;

    @ManyToOne(() => Alunos, (alunos) => alunos.treinosAlunos, {eager: true})
    @JoinColumn([{name: 'alunos_id_fk', referencedColumnName: "id"}])
    alunosIdFK: Alunos

    @ManyToOne(() => Treinos, (treinos) => treinos.treinosAlunos, {eager: true})
    @JoinColumn([{name: 'treinos_id_fk', referencedColumnName: "id"}])
    treinosIdFK: Treinos


}
