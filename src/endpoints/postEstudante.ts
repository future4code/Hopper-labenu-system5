import { Request, Response } from "express"
import { Estudante } from "../classes/Estudantes"
import { EstudanteDatabase } from "../database/EstudanteDatabase"

export const postEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = Date.now().toString()
        const nome = req.body.nome
        const email = req.body.email
        const data_nasc = req.body.data_nasc
        const turma = req.body.turma
        const hobbies = req.body.hobbies

        if (!nome || !email || !data_nasc || !turma || !hobbies) {
            throw new Error("Body inválido.")
        }

        const newEstudante = new Estudante(id,nome,email,data_nasc,turma,hobbies)

        const instancia = new EstudanteDatabase()
        instancia.postEstudante(newEstudante)

        res.status(201).send({ message: "Estudante criado", estudante: newEstudante})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}