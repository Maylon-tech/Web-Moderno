//  Par noe \ valor

const nome = 'nemoto'  //Contexto lexico

function exec() {
    const nome = 'Maylon'  //Contexto lexico 2
    return nome
}

//Objetos sao grupos aniunhado sde pares e valores.
const Cliente = {
    nome:'maylon',
    idade: 35,
    peso: 80,
    endoreco: {
        bairro: 'Shokomachi 201',
        regiao: 'Aichi, Hekinan'
    }
}
console.log(Cliente)
console.log(exec())
