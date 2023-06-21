// Funcao em JS e First-Class Object
//Higher Order Function

//Funcao de forma Literal
function fun1(){ }

//Armazenar funcao em uma variavel.
const fun2 = function(){ }

//Armazenar Funcao em um Array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2,5))

// Armazenar a funcao em um atributo de Objeto.
const obj = {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

//Passar funcao com Paramentro
function run(fun) {
    fun()
}
run(function() {
    console.log('Executando...')
})

// Uma funcao para retornar\Conter uma funcao
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(5, 5)(4)