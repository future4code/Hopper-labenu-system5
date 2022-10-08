import { Docente } from "../classes/Docentes";
import { BaseDatabase } from "./BaseDatabase";
import { TABELA_DOCENTE } from "./tableNames";

export class DocenteDataBase extends BaseDatabase {
    public async criarDocente(especialidades: Docente) {
        await BaseDatabase.connection(TABELA_DOCENTE).insert({
            id: especialidades.getId(),
            nome: especialidades.getNome(),
            email: especialidades.getEmail(),
            data_nasc: especialidades.getDataNasc()
        })


    }
    public async getDocente() {
        const result = await BaseDatabase.connection(TABELA_DOCENTE)
        return result
    }

    public async encontrarDocente(id:string){
        const result = await BaseDatabase.connection(TABELA_DOCENTE)
        .select()
        .where({id})

        return result

    }
    public async mudarDocente(id:string) {
                const result = await BaseDatabase.connection(TABELA_DOCENTE)
        .select()
        .update({id})

        return result

     }
}