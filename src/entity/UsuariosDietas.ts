import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuarios_dietas' })
export class UsuariosDietas extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
