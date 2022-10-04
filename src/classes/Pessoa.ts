export abstract class Pessoa {
    constructor(
        private id: string,
        private nome: string,
        private email: string,
        private dataNasc: Date,
        private turma: string
    ){}

    
}