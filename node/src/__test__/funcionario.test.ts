import { Funcionario } from '../funcionario';

describe('Funcionario', () => {
  it('deve criar um funcionário com nome, data de nascimento, salário e função', () => {
    const funcionario = new Funcionario('Maria', new Date(2000, 9, 18), 2009.44, 'Operador');
    expect(funcionario.getNome()).toBe('Maria');
    expect(funcionario.getDataNascimento()).toEqual(new Date(2000, 9, 18));
    expect(funcionario.getSalario()).toBe(2009.44);
    expect(funcionario.getFuncao()).toBe('Operador');
  });

  it('deve permitir alterar o salário', () => {
    const funcionario = new Funcionario('Maria', new Date(2000, 9, 18), 2009.44, 'Operador');
    funcionario.setSalario(2500.00);
    expect(funcionario.getSalario()).toBe(2500.00);
  });

  it('deve permitir alterar a função', () => {
    const funcionario = new Funcionario('Maria', new Date(2000, 9, 18), 2009.44, 'Operador');
    funcionario.setFuncao('Gerente');
    expect(funcionario.getFuncao()).toBe('Gerente');
  });
});