// Sofre Hoisting . O interpretador le a declaracao da var a mesmo assim.
console.log(a)
var a = 2
console.log(a)

// NAO sofre Hoiting.. nesse caso Gera erro e nao mostra nada..
console.log(b)
let b = 4

// NAO sofre Hoiting.. nesse caso Gera erro e nao mostra nada..
console.log(c)
const c = 10