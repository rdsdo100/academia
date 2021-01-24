import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Academia extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
