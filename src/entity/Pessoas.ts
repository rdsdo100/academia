import { BaseEntity, Column, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Enderecos } from './Enderecos';
import { Emails } from './Emails';
import { Telefones } from './Telefones';
import { Entity } from 'typeorm';
import { Alunos } from './Alunos';

@Entity()
export class Pessoas extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 80, nullable: false })
    nome: string;

    @Column({ length: 90, nullable: false })
    sobrenome: string;

    @Column({ length: 11, unique: true })
    cpf: string;

    @Column({ name: 'data_nacimento', nullable: false, type: 'date' })
    dataNacimento: Date;

    @Column({ name: 'data_cadastro', nullable: false, type: 'date' })
    dataCadastro: Date;

    @Column()
    ativo: boolean;

    @ManyToOne(() => Enderecos, (enderecos) => enderecos.pessoas, { eager: true })
    @JoinColumn([{ name: 'enderecos_id_fk', referencedColumnName: 'id' }])
    enderecosIdFK: Enderecos;

    @ManyToOne(() => Emails, (emails) => emails.pessoas, { eager: true })
    @JoinColumn([{ name: 'emails_id_fk', referencedColumnName: 'id' }])
    emailsIdFK: Emails;

    @ManyToOne(() => Telefones, (telefones) => telefones.pessoas, { eager: true })
    @JoinColumn([{ name: 'telefones_id_fk', referencedColumnName: 'id' }])
    telefonesIdFK: Telefones;

    @OneToMany(() => Alunos, (alunos) => alunos.pessoasIdFK)
    alunos: Alunos[];
}
