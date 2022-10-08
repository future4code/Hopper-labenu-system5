import { Request, Response } from "express"
import connection from "../database/connection"
import { TABELA_ESTUDANTE } from "../database/tableNames"

export const getEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const [result] = await connection(TABELA_ESTUDANTE)

        res.status(201).send({ result: result})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}