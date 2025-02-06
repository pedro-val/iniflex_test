import { Funcionario } from './funcionario';

const funcionarios: Funcionario[] = [
    new Funcionario("Maria", new Date(2000, 9, 18), 2009.44, "Operador"),
    new Funcionario("João", new Date(1990, 4, 12), 2284.38, "Operador"),
    new Funcionario("Caio", new Date(1961, 4, 2), 9836.14, "Coordenador"),
    new Funcionario("Miguel", new Date(1988, 9, 14), 19119.88, "Diretor"),
    new Funcionario("Alice", new Date(1995, 0, 5), 2234.68, "Recepcionista"),
    new Funcionario("Heitor", new Date(1999, 10, 19), 1582.72, "Operador"),
    new Funcionario("Arthur", new Date(1993, 2, 31), 4071.84, "Contador"),
    new Funcionario("Laura", new Date(1994, 6, 8), 3017.45, "Gerente"),
    new Funcionario("Heloísa", new Date(2003, 4, 24), 1606.85, "Eletricista"),
    new Funcionario("Helena", new Date(1996, 8, 2), 2799.93, "Gerente")
];

// 3.2 – Remover o funcionário “João” da lista
const index = funcionarios.findIndex(f => f.getNome() === "João");
if (index !== -1) {
    funcionarios.splice(index, 1);
}

// 3.3 – Imprimir todos os funcionários com todas suas informações
funcionarios.forEach(f => {
    console.log(`Nome: ${f.getNome()}, Data de Nascimento: ${f.getDataNascimento().toLocaleDateString()}, Salário: ${f.getSalario().toFixed(2)}, Função: ${f.getFuncao()}`);
});

// 3.4 – Os funcionários receberam 10% de aumento de salário
funcionarios.forEach(f => {
    f.setSalario(f.getSalario() * 1.10);
});

// 3.5 – Agrupar os funcionários por função em um MAP
const funcionariosPorFuncao = funcionarios.reduce((map, f) => {
    const funcao = f.getFuncao();
    if (!map[funcao]) {
        map[funcao] = [];
    }
    map[funcao].push(f);
    return map;
}, {} as { [key: string]: Funcionario[] });

// 3.6 – Imprimir os funcionários, agrupados por função
for (const funcao in funcionariosPorFuncao) {
    console.log(`Função: ${funcao}`);
    funcionariosPorFuncao[funcao].forEach(f => console.log(`  ${f.getNome()}`));
}

// 3.8 – Imprimir os funcionários que fazem aniversário no mês 10 e 12
funcionarios.filter(f => {
    const month = f.getDataNascimento().getMonth() + 1;
    return month === 10 || month === 12;
}).forEach(f => console.log(`Aniversariante: ${f.getNome()}`));

// 3.9 – Imprimir o funcionário com a maior idade
const maisVelho = funcionarios.reduce((oldest, f) => {
    return f.getDataNascimento() < oldest.getDataNascimento() ? f : oldest;
}, funcionarios[0]);
console.log(`Funcionário mais velho: ${maisVelho.getNome()}, Idade: ${new Date().getFullYear() - maisVelho.getDataNascimento().getFullYear()}`);

// 3.10 – Imprimir a lista de funcionários por ordem alfabética
funcionarios.sort((a, b) => a.getNome().localeCompare(b.getNome())).forEach(f => console.log(`Funcionário: ${f.getNome()}`));

// 3.11 – Imprimir o total dos salários dos funcionários
const totalSalarios = funcionarios.reduce((total, f) => total + f.getSalario(), 0);
console.log(`Total dos salários: ${totalSalarios.toFixed(2)}`);

// 3.12 – Imprimir quantos salários mínimos ganha cada funcionário
const salarioMinimo = 1212.00;
funcionarios.forEach(f => {
    console.log(`${f.getNome()} ganha ${(f.getSalario() / salarioMinimo).toFixed(2)} salários mínimos`);
});