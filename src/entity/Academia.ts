import {BaseEntity, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Academia extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number


}


