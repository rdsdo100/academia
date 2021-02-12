import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Usuarios } from './Usuarios';
import { RotasPermissoes } from './RotasPermissoes';

@Entity({ name: 'usuarios_rotas' })
export class UsuariosRotas extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.usuariosRotas, { eager: true })
    @JoinColumn([{ name: 'usuarios_id_fk', referencedColumnName: 'id' }])
    usuariosIdFK: Usuarios;

    @ManyToOne(() => RotasPermissoes, (rotasPermissoes) => rotasPermissoes.usuariosRotas, { eager: true })
    @JoinColumn([{ name: 'rotas_permissoes_id_fk', referencedColumnName: 'id' }])
    rotasPermissoesIdFK: RotasPermissoes;
}
