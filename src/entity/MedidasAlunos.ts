import {
    BaseEntity,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Medidas} from "./Medidas";
import {Alunos} from "./Alunos";

@Entity()
export class MedidasAlunos  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;

    @ManyToOne(() => Alunos, (alunos) => alunos.treinosAlunos, {eager: true})
    @JoinColumn([{name: 'alunos_id_fk', referencedColumnName: "id"}])
    alunosIdFK: Alunos

    @ManyToOne(() => Medidas, (medidas) => medidas.medidasAlunos, {eager: true})
    @JoinColumn([{name: 'medidas_id_fk', referencedColumnName: "id"}])
    medidasIdFK: Medidas
}
