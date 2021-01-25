import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { TreinosUsuarios } from './TreinosUsuarios';
import { SeriesExercicios } from './SeriesExercicios';

@Entity()
export class Treinos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    observacoes: string;

    @OneToMany(() => TreinosUsuarios, (treinosUsuarios) => treinosUsuarios.treinosIdFK)
    treinosUsuarios: TreinosUsuarios[];

    @OneToMany(() => SeriesExercicios, (seriesExercicios) => seriesExercicios.exerciciosIdFK)
    seriesExercicios: SeriesExercicios[];
}
