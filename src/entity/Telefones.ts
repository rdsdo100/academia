import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Telefones extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    dd: string

    @Column()
    telefone: string

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;
}
