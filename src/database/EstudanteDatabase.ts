import { Estudante } from "../classes/Estudantes";
import { BaseDatabase } from "./BaseDatabase";

export class EstudanteDatabase extends BaseDatabase {
    public static TABELA_ESTUDANTE = "LabeSys_Estudante"

    public async getEstudante(): Promise<Estudante[]>{
        const result = BaseDatabase
        .connection(EstudanteDatabase.TABELA_ESTUDANTE)
        return result
    }

    public async postEstudante(
        newEstudante: Estudante
    ): Promise<void> {
        BaseDatabase
        .connection(EstudanteDatabase.TABELA_ESTUDANTE)
        .insert(newEstudante)
    }

    public async putEstudanteTurma(
        id: string, 
        turma: string
    ): Promise<void> {
        BaseDatabase
        .connection(EstudanteDatabase.TABELA_ESTUDANTE)
        .where({id: id})
        .update({
            turma: turma
        },['id','turma'])
    }
}