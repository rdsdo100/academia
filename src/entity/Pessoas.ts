import {
    BaseEntity,
    Column , JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,

} from "typeorm";
import {Enderecos} from "./Enderecos";
import {Emails} from "./Emails";
import {Telefones} from "./Telefones";
import {Medidas} from "./Medidas";
import {Treino} from "./Treino";
import {Entity} from "typeorm";

@Entity()
export class Pessoas extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    sobrenome: string

    @Column()
    cpf: string

    @Column({name: 'data_nacimento'})
    dataNacimento: string

    @Column({name: 'data_cadastro'})
    dataCadastro: string

    @Column()
    ativo: boolean


   @ManyToOne(() => Enderecos, (enderecos) => enderecos.pessoas, {eager: true})
    @JoinColumn([{name: 'enderecos_id_fk', referencedColumnName: "id"}])
    enderecosIdFK: Enderecos

    @ManyToOne(() => Emails, (emails) => emails.pessoas, {eager: true})
    @JoinColumn([{name: 'emails_id_fk', referencedColumnName: "id"}])
    emailsIdFK: Enderecos

    @ManyToOne(() => Telefones, (telefones) => telefones.pessoas, {eager: true})
    @JoinColumn([{name: 'telefones_id_fk', referencedColumnName: "id"}])
    telefonesIdFK: Enderecos

    @OneToMany(() => Medidas, (medidas) => medidas.pessoasIdFK)
    medidas: Medidas[];

    @OneToMany(() => Treino, (trino) => trino.pessoasIdFK)
    treino: Treino[];


}
