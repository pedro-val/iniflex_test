import { Pessoa } from '../pessoa';

describe('Pessoa', () => {
  it('deve criar uma pessoa com nome e data de nascimento', () => {
    const pessoa = new Pessoa('Maria', new Date(2000, 9, 18));
    expect(pessoa.getNome()).toBe('Maria');
    expect(pessoa.getDataNascimento()).toEqual(new Date(2000, 9, 18));
  });

  it('deve permitir alterar o nome', () => {
    const pessoa = new Pessoa('Maria', new Date(2000, 9, 18));
    pessoa.setNome('João');
    expect(pessoa.getNome()).toBe('João');
  });

  it('deve permitir alterar a data de nascimento', () => {
    const pessoa = new Pessoa('Maria', new Date(2000, 9, 18));
    pessoa.setDataNascimento(new Date(1990, 4, 12));
    expect(pessoa.getDataNascimento()).toEqual(new Date(1990, 4, 12));
  });
});