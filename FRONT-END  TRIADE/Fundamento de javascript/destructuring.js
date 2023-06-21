    // Destructing lessons   01  - com a estutura de OBJETO

// Declarando uma constante Objeto
const pessoa = {
    nome:'Ana',
    idade: 25,
    endereco: {
        logradouro: 'Rua Amazonas 256',
        bairro: 'Centro'
    }
}

// Destruturando a Const Objeto
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

// Acessando objetos dentro de objetos.
const { endereco: { logradouro, bairro } } = pessoa
console.log(logradouro, bairro)

// Tentando acessar um objeto que nao existe. = null \ undefined
// const { conta: { agencia, num } } = pessoa
// console.log(agencia, num)

let line = '-------------------destructuring 02---------------------------------'
console.log(line)
        // Destructing lessons   02 usando a estutura do ARRAY


const [a] = [10]
console.log(a)

let line2 = '-------------------destructuring 03---------------------------------'
console.log(line2)


// Destructing lessons   02 Usando Funcao

function rand( { min=0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


let line3 = '-------------------destructuring 04---------------------------------'
console.log(line3)
// Destructing lessons   02 Usar o Array dentro da Funcao


function rand( [ min=0, max = 1000 ] ) {
    if(min > max) [min, max] = [max, min]
    const valor = (Math.random()) * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))