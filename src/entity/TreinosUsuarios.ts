import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Alunos } from './Alunos';
import { Treinos } from './Treinos';

@Entity({ name: 'treinos_usuarios' })
export class TreinosUsuarios extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeTreino: string;

    @ManyToOne(() => Alunos, (alunos) => alunos.treinosUsuarios, { eager: true })
    @JoinColumn([{ name: 'alunos_id_fk', referencedColumnName: 'id' }])
    alunosIdFK: Alunos;

    @ManyToOne(() => Treinos, (treinos) => treinos.treinosUsuarios, { eager: true })
    @JoinColumn([{ name: 'treinos_id_fk', referencedColumnName: 'id' }])
    treinosIdFK: Treinos;
}
