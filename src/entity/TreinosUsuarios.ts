import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuarios } from './Usuarios';
import { Treinos } from './Treinos';

@Entity({ name: 'treinos_usuarios' })
export class TreinosUsuarios extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeTreino: string;

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.treinosUsuarios)
    @JoinColumn([{ name: 'usuarios_id_fk', referencedColumnName: 'id' }])
    usuariosIdFK: Usuarios;

    @ManyToOne(() => Treinos, (treinos) => treinos.treinosUsuarios)
    @JoinColumn([{ name: 'treinos_id_fk', referencedColumnName: 'id' }])
    treinosIdFK: Treinos;
}
