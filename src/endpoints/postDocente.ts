import { Request,Response } from "express";
import { Docente } from "../classes/Docentes";
import { DocenteDataBase } from "../database/DocenteDatabase";

export const postDocente =async (req:Request, res:Response) => {
   let errorCode = 400

   try {
    const{id,nome,email,data_nasc,turma, especialidades}= req.body

    if(!nome || !email || !data_nasc || !turma ){
        errorCode = 422
        throw new Error("Preencha todas as informações!");
           
    }
    const docenteDataBase = new DocenteDataBase()
    const encontraDocente = await docenteDataBase.encontrarDocente(id)

    if(encontraDocente.length === 0){
        errorCode = 404
        throw new Error("Usuário não encontrado");
        
    }
       res.status(200).send({message:"Usuário criado com sucesso"})
   } catch (error) {
    
   }
       
}