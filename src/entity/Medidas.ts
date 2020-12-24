import {
    BaseEntity,
    Column, CreateDateColumn,
    Entity, OneToMany,
    PrimaryGeneratedColumn, UpdateDateColumn

} from "typeorm";
import {MedidasAlunos} from "./MedidasAlunos";


@Entity()
export class Medidas extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column({type: "date" ,name: "data_avaliacao" })
    dataAvaliacao: Date

    @Column()
    peso: number

    @Column()
    estatura: number

    @Column({name: "torax_normal"})
    toraxNormal: number

    @Column({name: "torax_expandido"})
    toraxExpandido: number

    @Column({name:"braco_direito_relaxado"})
    bracoDireitoRelaxado : number

    @Column({name:"braco_direito_expandido"})
    bracoDireitoExpandido : number

    @Column()
    cintura : number

    @Column()
    abdomem : number

    @Column()
    quadril : number

    @Column({name:"coxa_medial_direira"})
    coxaMedialDireira : number

    @Column({name:"coxa_medial_esquerda"})
    coxaMedialEsquerda : number

    @Column({name: "panturrilia_direita"})
    panturriliaDireita: number

    @Column({name: "panturrilia_esquerda"})
    panturriliaEsquerda : number

    @Column()
    observacoes: string

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;

    @OneToMany(() => MedidasAlunos, (medidasAlunos) => medidasAlunos.medidasIdFK)
    medidasAlunos: MedidasAlunos[];


}
