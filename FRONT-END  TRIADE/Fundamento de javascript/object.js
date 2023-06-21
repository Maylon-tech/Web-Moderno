const iniciante = {}
iniciante.passo = 'costa com costa'
iniciante.data = '22-07-2022'
iniciante.alunos = 'Felipe, Naoki, Edson'

console.log(iniciante)

const intermediario = {
    passo: 'rocambole',
    data: 20/05/2021,
    exame: 'summer holiday'
}
console.log(intermediario)

//Pode ter um estrutura aninhada tambem.
const avancado =  {
    passo: 'Trinistro',
    data: 10-04-2021,
    obj: {
        outraData: 5-06-2022
    },
    exame: 'Winter holiday',
    alternataiva: {
        outono:'sim',
        verao:'nao'
    }
}
console.log(avancado)


let nomes = ['Maylon', 'Nanda', 'Leticia']

function converter(objeto){
   let newNames = JSON.stringify(nomes)
console.log(newNames)

    let backNames = JSON.parse(newNames)
    console.log(backNames)
}
converter(nomes)