import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { postTurma } from "./endpoints/postTurma";
import { putTurmaModel } from "./endpoints/putTurmaModel";
import { getTurma } from "./endpoints/getTurma";

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/turma", getTurma)

app.post("/turma", postTurma)

app.put("/turma/modulo", putTurmaModel)