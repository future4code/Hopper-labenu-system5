import { Turma } from "../classes/Turma";
import { BaseDatabase } from "./BaseDatabase";

export class TurmaDatabase extends BaseDatabase {
    public static TABELA_TURMA = "LabeSys_Turma"

    public async getTurma(): Promise<Turma[]> {
        const result = await BaseDatabase
        .connection(TurmaDatabase.TABELA_TURMA)
        .select()
        console.log(result)
        return result
    }

    public async postTurma(
        newTurma: Turma
    ): Promise<void> {
        await BaseDatabase
        .connection(TurmaDatabase.TABELA_TURMA)
        .insert(newTurma)
    }

    public async putTurmaModulo(
        id: string, 
        modulo: string
    ): Promise<void> {
        await BaseDatabase
        .connection(TurmaDatabase.TABELA_TURMA)
        .where({id: id})
        .update({
            modulo: modulo
        },['id','modulo'])
    }
}