function tratarErro(erro) {   // Funcao para vaerificar o Erro no contexto geral.
    // throw new Error()
    // throw 10
    // throw true
    // throw 'message'
    throw {
        nome: erro.name,
        msg: erro.mesasge,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {       // Parte do codigo que sera testado!
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {        // parte do codigo que e executado a funcao para capturar o erro!
        tratarErro(e)
} finally {     // Relatar o resultado final da operacao do ERRO!
        console.log('Final')
    }
}

const obj = { nome: 'Maylon'}
imprimirNomeGritado(obj)