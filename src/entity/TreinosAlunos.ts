import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Alunos } from './Alunos';
import { Treinos } from './Treinos';

@Entity({ name: 'treinos_alunos' })
export class TreinosAlunos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeTreino: string;

    @ManyToOne(() => Alunos, (alunos) => alunos.treinosAlunos, { eager: true })
    @JoinColumn([{ name: 'alunos_id_fk', referencedColumnName: 'id' }])
    alunosIdFK: Alunos;

    @ManyToOne(() => Treinos, (treinos) => treinos.treinosAlunos, { eager: true })
    @JoinColumn([{ name: 'treinos_id_fk', referencedColumnName: 'id' }])
    treinosIdFK: Treinos;
}
