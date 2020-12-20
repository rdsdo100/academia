import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

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

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;

}
