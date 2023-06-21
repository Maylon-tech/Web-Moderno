//Conceiro: é o escopo criado quando a função é declarado
//Esse escopo permite a função acessar e manipular variáveis externas a função

//Contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
} 

// * Memórioa de onde ela foi definida. closure.
const minhaFuncao = fora()
console.log(minhaFuncao())