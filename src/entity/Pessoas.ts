import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Enderecos} from "./Enderecos";
import {Emails} from "./Emails";
import {Telefones} from "./Telefones";
import {Medidas} from "./Medidas";

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

    @Column()
    dataNacimento: string

    @Column()
    dataCadastro: string

    @Column()
    ativo: boolean

  /*  @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;*/

    @ManyToOne(() => Enderecos, (enderecos) => enderecos.pessoas, {eager: true})
    @JoinColumn([{name: "enderecos_id_fK", referencedColumnName: "id"}])
    enderecosIdFK: Enderecos

    @ManyToOne(() => Emails, (emails) => emails.pessoas, {eager: true})
    @JoinColumn([{name: "emails_id_fK", referencedColumnName: "id"}])
    emailsIdFK: Enderecos

    @ManyToOne(() => Telefones, (telefones) => telefones.pessoas, {eager: true})
    @JoinColumn([{name: "telefones_id_fK", referencedColumnName: "id"}])
    telefonesIdFK: Enderecos

    @OneToMany(() => Medidas, (medidas) => medidas.pessoasIdFK)
    medidas: Medidas[];


}
