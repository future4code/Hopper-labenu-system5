import { Request, Response } from "express"
import connection from "../database/connection"
import { TABELA_TURMA } from "../database/tableNames"

export const getTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const [result] = await connection(TABELA_TURMA)

        res.status(201).send({ result: result})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}