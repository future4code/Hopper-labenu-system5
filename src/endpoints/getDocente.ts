import { Request, Response } from "express";
import { DocenteDataBase } from "../database/DocenteDatabase";

export const getDocente = async(req:Request, res:Response)=>{
    let errorCode = 400

    try {
        const docenteDataBase = new DocenteDataBase()
        const result = await docenteDataBase.getDocente()

        res.status(200).send({Docente:result})
    } catch (error:any) {
        res.status(errorCode).send({message:error.message})
    }

}