import { Request, Response } from "express"
import { EstudanteDatabase } from "../database/EstudanteDatabase"

export const putEstudanteTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.body.id
        const turma = req.body.turma

        if (!turma) {
            throw new Error("Body inválido.")
        }

        const instancia = new EstudanteDatabase()
        instancia.putEstudanteTurma(id,turma)

        res.status(201).send({ message: "Turma alterada"})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}