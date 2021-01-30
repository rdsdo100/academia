import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuarios } from './Usuarios';
import { Enderecos } from './Enderecos';
import { Emails } from './Emails';
import { Telefones } from './Telefones';

@Entity()
export class Academias extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'nome_fantazia', length: 60 })
    nomeFantazia: string;

    @Column({ name: 'nome_razao_social', length: 60 })
    nomeRazaoSocial: string;

    @Column({ name: 'cpf_cnpj', length: 14, unique: true })
    cpfCnpj: string;

    @Column()
    ativo: boolean;

    @Column()
    bloqueado: boolean;

    @ManyToOne(() => Enderecos, (enderecos) => enderecos.academias, { eager: true })
    @JoinColumn([{ name: 'enderecos_id_fk', referencedColumnName: 'id' }])
    enderecosIdFK: Enderecos;

    @ManyToOne(() => Emails, (emails) => emails.academias, { eager: true })
    @JoinColumn([{ name: 'emails_id_fk', referencedColumnName: 'id' }])
    emailsIdFK: Emails;

    @ManyToOne(() => Telefones, (telefones) => telefones.academias, { eager: true })
    @JoinColumn([{ name: 'telefones_id_fk', referencedColumnName: 'id' }])
    telefonesIdFK: Telefones;

    @OneToMany(() => Usuarios, (usuarios) => usuarios.academiasIdFK)
    usuarios: Usuarios[];
}
