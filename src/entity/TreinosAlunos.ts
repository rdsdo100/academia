import {BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Enderecos} from "./Enderecos";
import {Alunos} from "./Alunos";
import {Treinos} from "./Treinos";

@Entity()
export class TreinosAlunos  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number

    @ManyToOne(() => Alunos, (alunos) => alunos.treinosAlunos, {eager: true})
    @JoinColumn([{name: 'alunos_id_fk', referencedColumnName: "id"}])
    alunosIdFK: Alunos

    @ManyToOne(() => Treinos, (treinos) => treinos.treinosAlunos, {eager: true})
    @JoinColumn([{name: 'treinos_id_fk', referencedColumnName: "id"}])
    treinosIdFK: Treinos


}
