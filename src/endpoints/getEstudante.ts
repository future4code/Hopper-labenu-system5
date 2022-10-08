import { Request, Response } from "express"
import { EstudanteDatabase } from "../database/EstudanteDatabase"

export const getEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const instancia = new EstudanteDatabase()
        const [result] = await instancia.getEstudante()

        res.status(201).send({ result: result})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}