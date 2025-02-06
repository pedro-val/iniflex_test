import { Funcionario } from '../funcionario';

describe('Main logic', () => {
  let funcionarios: Funcionario[];

  funcionarios = [
    new Funcionario('Maria', new Date(2000, 9, 18), 2009.44, 'Operador'),
    new Funcionario('João', new Date(1990, 4, 12), 2284.38, 'Operador'),
    new Funcionario('Caio', new Date(1961, 4, 2), 9836.14, 'Coordenador'),
    new Funcionario('Miguel', new Date(1988, 9, 14), 19119.88, 'Diretor'),
    new Funcionario('Alice', new Date(1995, 0, 5), 2234.68, 'Recepcionista'),
    new Funcionario('Heitor', new Date(1999, 10, 19), 1582.72, 'Operador'),
    new Funcionario('Arthur', new Date(1993, 2, 31), 4071.84, 'Contador'),
    new Funcionario('Laura', new Date(1994, 6, 8), 3017.45, 'Gerente'),
    new Funcionario('Heloísa', new Date(2003, 4, 24), 1606.85, 'Eletricista'),
    new Funcionario('Helena', new Date(1996, 8, 2), 2799.93, 'Gerente')
  ];

  it('deve remover o funcionário "João" da lista', () => {
    const index = funcionarios.findIndex(f => f.getNome() === 'João');
    if (index !== -1) {
      funcionarios.splice(index, 1);
    }
    expect(funcionarios.find(f => f.getNome() === 'João')).toBeUndefined();
  });

  it('deve aumentar o salário dos funcionários em 10%', () => {
    funcionarios.forEach(f => {
      f.setSalario(f.getSalario() * 1.10);
    });
    expect(funcionarios[0].getSalario()).toBeCloseTo(2210.38, 2);
  });

  it('deve agrupar os funcionários por função', () => {
    const funcionariosPorFuncao = funcionarios.reduce((map, f) => {
      const funcao = f.getFuncao();
      if (!map[funcao]) {
        map[funcao] = [];
      }
      map[funcao].push(f);
      return map;
    }, {} as { [key: string]: Funcionario[] });

    expect(funcionariosPorFuncao['Operador'].length).toBe(2);
    expect(funcionariosPorFuncao['Gerente'].length).toBe(2);
  });

  it('deve encontrar o funcionário mais velho', () => {
    const maisVelho = funcionarios.reduce((oldest, f) => {
      return f.getDataNascimento() < oldest.getDataNascimento() ? f : oldest;
    }, funcionarios[0]);
    expect(maisVelho.getNome()).toBe('Caio');
  });

  it('deve calcular o total dos salários dos funcionários', () => {
    const totalSalarios = funcionarios.reduce((total, f) => total + f.getSalario(), 0);
    expect(totalSalarios).toBeCloseTo(50906.82, 2);
  });

  it('deve calcular quantos salários mínimos cada funcionário ganha', () => {
    const salarioMinimo = 1212.00;
    const salariosMinimos = funcionarios.map(f => ({
      nome: f.getNome(),
      salariosMinimos: (f.getSalario() / salarioMinimo).toFixed(2)
    }));

    expect(salariosMinimos).toEqual([
      { nome: 'Maria', salariosMinimos: '1.82' },
      { nome: 'Caio', salariosMinimos: '8.93' },
      { nome: 'Miguel', salariosMinimos: '17.35' },
      { nome: 'Alice', salariosMinimos: '2.03' },
      { nome: 'Heitor', salariosMinimos: '1.44' },
      { nome: 'Arthur', salariosMinimos: '3.70' },
      { nome: 'Laura', salariosMinimos: '2.74' },
      { nome: 'Heloísa', salariosMinimos: '1.46' },
      { nome: 'Helena', salariosMinimos: '2.54' }
    ]);
  });
});