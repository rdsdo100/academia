import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Medidas } from './Medidas';
import { Alunos } from './Usuarios';

@Entity({ name: 'medidas_usuarios' })
export class MedidasUsuarios extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Alunos, (alunos) => alunos.treinosUsuarios, { eager: true })
    @JoinColumn([{ name: 'usuarios_id_fk', referencedColumnName: 'id' }])
    alunosIdFK: Alunos;

    @ManyToOne(() => Medidas, (medidas) => medidas.medidasUsuarios, { eager: true })
    @JoinColumn([{ name: 'medidas_id_fk', referencedColumnName: 'id' }])
    medidasIdFK: Medidas;
}
