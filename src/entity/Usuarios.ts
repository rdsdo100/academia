import {
    Column,
    Entity,
    PrimaryGeneratedColumn, BaseEntity, UpdateDateColumn, CreateDateColumn
} from "typeorm";



@Entity()
export class Usuarios extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: "nome_usuario"})
    nomeUsuario: string

    @Column({unique:true})
    email: string

    @Column()
    senha: string

    @Column()
    matricula: string

    @CreateDateColumn({name: "updated_at"})
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" , name:"updated_at" })
    updatedAt: Date;

}
