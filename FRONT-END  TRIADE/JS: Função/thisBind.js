//   O USO DA FUNCAO BIND() NO THIS.
    // EXEMPLO 01   --   objeto com funcao

const pessoa = {
    saudacao: 'Bon Jur',    //Objeto - chave_valor
    falar(){    //Funcao.
        console.log(this.saudacao)  //Uso do this para refererir em qual contexto esta usando .
    }
}
pessoa.falar()  //chamada da funcao do objeto.

const falar = pessoa.falar
falar()     // Conflito entre paradigmas

// Usando o Bind()
// Bind = e um metodo responsavel por amarrar um determinado objeto, ou seja, quando chamar a funcao o Bind vai referir ao Objeto especifico,.
const falarDePessoa = pessoa.falar.bind(pessoa)     // Volta a apontar para o Objeto Certo!
falarDePessoa()

//  EXEMPLO 02 = SETTIMEOUT

function Pessoa() {

    this.idade = 0

    const self = this       //Esta sendo executado dentro da funcao; para o objeto this ser apontado para instancia. usado para triblar o uso do This.

    setInterval(function() {
        this.idade++
        console.log(self.idade)

    }.bind(this), 1000)     // O bind busca a referencia do This que e a Idade. para depois incrementar corretamente
}

new Pessoa