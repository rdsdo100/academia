import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'usuarios_rotas'})
export class UsuariosRotas {
    @PrimaryGeneratedColumn()
    id: number;
}
