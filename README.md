# iniflex_test

Este repositório contém um projeto de teste prático implementado em Java e Node.js com TypeScript.

## Estrutura do Projeto
iniflex_test/ 
├── .gitignore 
├── README.md 
    ├── java_lang/ 
        │ ├── Funcionario.java 
        │ ├── Main.java 
        │ └── Pessoa.java 
├── node/ 
    │ ├── package.json 
        │ └── src/ 
            │ ├── funcionario.ts 
            │ ├── main.ts 
            │ └── pessoa.ts 


## Executando o Código Java

### Pré-requisitos

- Java Development Kit (JDK) 8 ou superior

### Passos para Compilar e Executar

1. **Navegue até a pasta do projeto Java**:
    ```sh
    cd your_folder/iniflex_test/java_lang
    ```
2. **Utilize o javac para compilar os arquivos .java**:
    ```sh
    javac -d target *.java
    ```
3. **Execute a classe principal Main utilizando java dentro da pasta ./target**:
    ```sh
    java -cp target java_lang.Main
    ```

## Executando o Código Node.js com TypeScript

### Pré-requisitos

- Node.js
- npm (Node Package Manager)

### Passos para Compilar e Executar

1. **Navegue até a pasta do projeto Node.js**:
    ```sh
    cd your_folder/iniflex_test/node
    ```
2. **Instale as dependências**:
    ```sh
    npm install
    ```
3. **Execute o projeto**:
    ```sh
    npm start
    ```

## Executando os Testes Node.js com Jest

### Pré-requisitos

- Node.js
- npm (Node Package Manager)

### Passos para Executar os Testes

1. **Navegue até a pasta do projeto Node.js**:
    ```sh
    cd your_folder/iniflex_test/node
    ```
2. **Instale as dependências**:
    ```sh
    npm install
    ```
3. **Execute os testes**:
    ```sh
    npm test
    ```