import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pessoas } from './Pessoas';
import { Academias } from './Academias';

@Entity()
export class Telefones extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 3 })
    dd: string;

    @Column({ length: 10, nullable: false })
    telefone: string;

    @OneToMany(() => Pessoas, (pessoas) => pessoas.telefonesIdFK)
    pessoas: Pessoas[];

    @OneToMany(() => Academias, (academias) => academias.telefonesIdFK)
    academias: Academias[];
}
