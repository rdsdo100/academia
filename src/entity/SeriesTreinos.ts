import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class SeriesTreinos extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    serie: number

    @Column()
    vezes: number

    @Column()
    kilos: number

    @Column()
    tempo: number

    @Column()
    interbalo: number

}
