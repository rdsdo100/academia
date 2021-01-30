import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tipos_refeicoes' })
export class TiposRefeicoes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
