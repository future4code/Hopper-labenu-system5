import { Request, Response } from "express"
import { Turma } from "../classes/Turma"
import connection from "../database/connection"
import { TABELA_TURMA } from "../database/tableNames"

export const postTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = Date.now().toString()
        const nome = req.body.nome
        const modulo = req.body.modulo

        if (!nome || !modulo) {
            throw new Error("Body inválido.")
        }

        const newTurma = new Turma(id,nome,modulo)

        await connection(TABELA_TURMA).insert(
            newTurma 
        )

        res.status(201).send({ message: "Turma criada", turma: newTurma})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}