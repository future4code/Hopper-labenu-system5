import { Request, Response } from "express"
import { TurmaDatabase } from "../database/TurmaDatabase"

export const putTurmaModel = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.body.id
        const modulo = req.body.modulo

        if (!id || !modulo) {
            throw new Error("Body inválido.")
        }

        const instancia = new TurmaDatabase()
        instancia.putTurmaModulo(id,modulo)

        res.status(200).send({ message: "Módulo alterado"})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}