import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pessoas } from './Pessoas';
import {Academias} from "./Academias";

@Entity()
export class Emails extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @OneToMany(() => Pessoas, (pessoas) => pessoas.emailsIdFK)
    pessoas: Pessoas[];

    @OneToMany(() => Academias, (academias) => academias.emailsIdFK)
    academias: Academias[];
}
