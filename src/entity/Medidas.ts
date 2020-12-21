import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Telefones} from "./Telefones";
import {Enderecos} from "./Enderecos";
import {Pessoas} from "./Pessoas";

@Entity()
export class Medidas extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    dataAvaliacao: Date

    @Column()
    peso: number

    @Column()
    estatura: number

    @Column()
    toraxNormal: number

    @Column()
    toraxExpandido: number

    @Column()
    bracoDireitoRelaxado : number

    @Column()
    bracoDireitoExpandido : number

    @Column()
    cintura : number

    @Column()
    abdomem : number

    @Column()
    quadril : number

    @Column()
    coxaMedialDireira : number

    @Column()
    coxaMedialEsquerda : number

    @Column()
    panturriliaDireita: number

    @Column()
    panturriliaEsquerda : number

    @Column()
    observacoes: string

/*    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;*/

    @ManyToOne(() => Pessoas, (pessoas) => pessoas.medidas, {eager: true})
    @JoinColumn([{name: "pessoas_id_fK", referencedColumnName: "id"}])
    pessoasIdFK: Pessoas



}
