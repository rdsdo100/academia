import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

import { Pessoas } from './Pessoas';
import { TreinosUsuarios } from './TreinosUsuarios';
import { MedidasUsuarios } from './MedidasUsuarios';

@Entity()
export class Usuarios extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'nome_usuario' , length: 50})
    nomeUsuario: string

    @Column({length:90 , unique: true})
    email: string

    @Column({length: 30})
    senha: string

    @Column({length:30})
    matricula: string

    @ManyToOne(() => Pessoas, (pessoas) => pessoas.alunos, { eager: true })
    @JoinColumn([{ name: 'pessoas_id_fk', referencedColumnName: 'id' }])
    pessoasIdFK: Pessoas;

    @OneToMany(() => TreinosUsuarios, (treinosUsuarios) => treinosUsuarios.alunosIdFK)
    treinosUsuarios: TreinosUsuarios[];

    @OneToMany(() => MedidasUsuarios, (medidasAlunos) => medidasAlunos.alunosIdFK)
    medidasUsuarios: MedidasUsuarios[];
}
