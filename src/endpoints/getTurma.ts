import { Request, Response } from "express"
import { TurmaDatabase } from "../database/TurmaDatabase"

export const getTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const instancia = new TurmaDatabase()
        const result = await instancia.getTurma()

        res.status(200).send(result)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}