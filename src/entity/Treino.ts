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
import {Exercicios} from "./Exercicios";
import {Pessoas} from "./Pessoas";

@Entity()
export class Treino extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    serie: number

    @Column()
    vezes: number

    @Column()
    kilos: number

    @Column()
    tempo: number

    @Column()
    observacoes: string

/*    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;*/



    @ManyToOne(() => Pessoas, (pessoas) => pessoas.treino, {eager: true})
    @JoinColumn([{name: "pessoas_id_fK", referencedColumnName: "id"}])
    pessoasIdFK: Pessoas

    @ManyToOne(() => Exercicios, (exercicios) => exercicios.treino, {eager: true})
    @JoinColumn([{name: "exercicios_id_fK", referencedColumnName: "id"}])
    exerciciosIdFK: Pessoas


}
