import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Emails extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    email: string

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;
}
