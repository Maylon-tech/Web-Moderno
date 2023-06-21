
//A variavel com VAR representa no escopo global
{
    {
        {
            var name = 'Maylon'
            console.log(name)
        }
    }
}

console.log(name)


// Dentro da funcao funciona somente dentro do escopo dela
function text() {
    var n = 2
    console.log(n)
}

text()


// A variavel Global sera sobrescrevido pela outra variavel
var numero = 1
 {
    var numero = 2
    console.log('dentro =', numero)
 }
 console.log('fora =', numero)
 // Entao a variavel do escopo local sera o n=2 tanto dentro e fora do escopo.