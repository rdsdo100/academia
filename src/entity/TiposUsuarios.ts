import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'tipos_usuarios'})
export class TiposUsuarios {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'tipo_usuario'})
    tipoUsuario: string;
}
