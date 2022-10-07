import { Request, Response } from "express";
import { DocenteDataBase } from "../database/DocenteDatabase";


export const putDocente =async (req:Request, res:Response) => {
let errorCode = 400
try {

    const turma = req.body.turma
    const nome = req.body.nome

    if(!turma || !nome){
        throw new Error("Informações incorretas");    

    }

    const docenteDataBase = new DocenteDataBase()
    const result = await docenteDataBase.mudarDocente(turma)

    if(result === 0){
        throw new Error("Usuário não encontrado");
        
    }

    await docenteDataBase.mudarDocente(turma)
    res.status(200).send({message:"Turma modificado com sucesso"})
    
} catch (error:any) {
    res.status(errorCode).send({ message: error.message })
}


    
}