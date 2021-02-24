import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { UsuariosRotas } from './UsuariosRotas';
import {RotasPrincipais} from "./RotasPrincipais";

@Entity({ name: 'rotas_permissoes' })
    export class RotasPermissoes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'nome_rota', length: 50, unique: true })
    nomeRota: string;

    @Column({ name: 'caminho_rota', length: 50, unique: true })
    caminhoRota: string;

    @OneToMany(() => UsuariosRotas, (usuariosRotas) => usuariosRotas.rotasPermissoesIdFK)
    usuariosRotas: UsuariosRotas[];


    @ManyToOne(() => RotasPrincipais, (rotasPrincipais) => rotasPrincipais.rotasPermissoes)
    @JoinColumn([{ name: 'rotas_principais_id_fk', referencedColumnName: 'id' }])
    rotas_principais_id_fk: RotasPrincipais;

}
