import { Pessoa } from "./Pessoa"

export class Docente extends Pessoa {
    constructor(
        id: string,
        nome: string,
        email: string,
        data_nasc: Date,
        turma: string,
        private especialidades: string[]
    ){
        super(
            id,
            nome,
            email,
            data_nasc,
            turma
        )}

        public getEspecialidade(): string[] {
            return this.especialidades;
          }
    }


    
