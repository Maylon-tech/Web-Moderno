//      FORMA DIFERENTES DE DECLARAR FUNÇÕES

//function declaration
// * Esse tipo de função pode ser Declarada antes ..
function soma(x, y){
    return x + y
}

//function expression
// Nesse a Função só pode ser chamada depois da declaração..
const sub = function (x, y) {
    return x - y
}

//named function expression  ** Não muito utilizado  ** fácil pra ser debugado.
// Mesmo assim essa Função só pode ser chamada depois da declaração
const mult = function mult(x, y) {
    return x * y
}