import { Request, Response } from "express"
import connection from "../database/connection"
import { TABELA_ESTUDANTE } from "../database/tableNames"

export const putEstudanteTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.body.id
        const turma = req.body.turma

        if (!turma) {
            throw new Error("Body inválido.")
        }

        await connection(TABELA_ESTUDANTE)
        .where({id: id})
        .update({
            turma: turma
        },['id','turma'])

        res.status(201).send({ message: "Turma alterada"})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}