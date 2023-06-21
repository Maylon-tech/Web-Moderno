
// CHAMANDO DA FUNCAO DE MODO TRADICIONAL.
let dobro = function(a) {
    return 2 * a
}
console.log(dobro(Math.PI))

// UTILIZANDO O ARROW DO MODO NORMAL - COM RETURN A MOSTRA.
dobro = (a) => {
    return 3 * a
}
console.log(dobro(Math.PI))

// UTILIZANDO A ARROW D EMODO IMPLICITO. ENXUTO. - SEM RETURN. (QUANDO NAO HA PARAMENTRO PARA USAR. ENTAO USA O () _ MESMO SER FOR UM PARAMETRO NAO NECESSITA DE ()...)
dobro  = a => 4 * a
console.log(dobro(Math.PI))


// TRABALHANDO COM THIS DENTRO DA FUNCAO ARROW..

function pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++            // Uso do this dentro da Arrow function fica mais Flexivel - Mais utilizavel.
        console.log(this.idade)
    }, 1000)
}
// new pessoa

// USO DO BIND E THIS NO ARROW FUNCTION..

    // Uso na funcao normal
let comparaComThis = function(param) {
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

    // Uso na arrow Function

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)