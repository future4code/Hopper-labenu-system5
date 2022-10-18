export abstract class Pessoa {
    constructor(
        private id: string,
        private nome: string,
        private email: string,
        private dataNasc: Date,
        private turma: string
    ){}

    public getId(): string{
        return this.id
    }
    
    public getNome(): string{
        return this.nome
    }
    
    public getEmail(): string{
        return this.email
    }
    
    public getDataNasc(): Date{
        return this.dataNasc
    }
    
    public getTurmaId(): string{
        return this.turma
    }
    
    }
