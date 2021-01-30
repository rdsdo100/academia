import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'refeicoes_dietas' })
export class RefeicoesDietas extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
