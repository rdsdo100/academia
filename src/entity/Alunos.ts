import { BaseEntity, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Pessoas } from './Pessoas';
import { TreinosUsuarios } from './TreinosUsuarios';
import { MedidasUsuarios } from './MedidasUsuarios';

@Entity()
export class Alunos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Pessoas, (pessoas) => pessoas.alunos, { eager: true })
    @JoinColumn([{ name: 'pessoas_id_fk', referencedColumnName: 'id' }])
    pessoasIdFK: Pessoas;

    @OneToMany(() => TreinosUsuarios, (treinosUsuarios) => treinosUsuarios.alunosIdFK)
    treinosUsuarios: TreinosUsuarios[];

    @OneToMany(() => MedidasUsuarios, (medidasAlunos) => medidasAlunos.alunosIdFK)
    medidasUsuarios: MedidasUsuarios[];
}
