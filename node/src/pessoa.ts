// 1 - Classe Pessoa com os atributos: nome e data nascimento.

export class Pessoa {
    private nome: string;
    private dataNascimento: Date;

    constructor(nome: string, dataNascimento: Date) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }
}