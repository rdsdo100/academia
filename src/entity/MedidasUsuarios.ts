import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Medidas } from './Medidas';
import {Usuarios} from './Usuarios';

@Entity({ name: 'medidas_usuarios' })
export class MedidasUsuarios extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.treinosUsuarios, { eager: true })
    @JoinColumn([{ name: 'usuarios_id_fk', referencedColumnName: 'id' }])
    usuariosIdFK: Usuarios;

    @ManyToOne(() => Medidas, (medidas) => medidas.medidasUsuarios, { eager: true })
    @JoinColumn([{ name: 'medidas_id_fk', referencedColumnName: 'id' }])
    medidasIdFK: Medidas;
}
