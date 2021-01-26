import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoUsuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
}
