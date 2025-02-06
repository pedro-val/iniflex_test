import { Pessoa } from './pessoa';

// 2 - Classe Funcionário que estenda a classe Pessoa, com os atributos: salário e função.

export class Funcionario extends Pessoa {
    private salario: number;
    private funcao: string;

    constructor(nome: string, dataNascimento: Date, salario: number, funcao: string) {
        super(nome, dataNascimento);
        this.salario = salario;
        this.funcao = funcao;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setSalario(salario: number): void {
        this.salario = salario;
    }

    public getFuncao(): string {
        return this.funcao;
    }

    public setFuncao(funcao: string): void {
        this.funcao = funcao;
    }
}