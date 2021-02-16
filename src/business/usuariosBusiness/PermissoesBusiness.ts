import {buscarPermissoesRtasUusariosRepository} from "../../repository/permissoesRtasUusariosRepository";


export default class PermissoesBusiness {

    async buscarPermissoes( idUsuario: number ){
        const  ret =    await buscarPermissoesRtasUusariosRepository(idUsuario)

const retornoFormatado = ret.map((x: any) =>{
    return {
        id: x.rotasPermissoesIdFK.id ,
        nomeRota: x.rotasPermissoesIdFK.nomeRota,
        caminhoRota: x.rotasPermissoesIdFK.caminhoRota
    }
})

       return retornoFormatado
    }
}