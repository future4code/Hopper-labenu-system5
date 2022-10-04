import { Request, Response } from "express"
import connection from "../database/connection"
import { TABELA_TURMA } from "../database/tableNames"

export const putTurmaModel = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.body.id
        const modulo = req.body.modulo

        if (!modulo) {
            throw new Error("Body inválido.")
        }

        await connection(TABELA_TURMA)
        .where({id: id})
        .update({
            modulo: modulo
        },['id','modulo'])

        res.status(201).send({ message: "Módulo alterado"})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}