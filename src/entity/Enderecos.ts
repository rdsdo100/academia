import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pessoas } from './Pessoas';
import { Academias } from './Academias';

@Entity()
export class Enderecos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cep: string;

    @Column()
    logradouro: string;

    @Column()
    complemento: string;

    @Column()
    bairro: string;

    @Column()
    localidade: string;

    @Column()
    uf: string;

    @Column()
    ibge: string;

    @Column()
    numero: string;

    @OneToMany(() => Pessoas, (pessoas) => pessoas.enderecosIdFK)
    pessoas: Pessoas[];

    @OneToMany(() => Academias, (academias) => academias.enderecosIdFK)
    academias: Academias[];
}
