 // TODO O VALOR DE UM ARRAY EM JAVASCRIPT E UM OBJETO.

const array = ['ola', 'maylon', '35']
console.log(`${array[0]} ${array[1]} tenho ${array[2]}`)

console.log(array.length)   //Mostra o tamanho do Array.

array.push('devAprender')       //Insere novo valor no Array.
console.log(array)

console.log(array.pop())        //Retira e mostra o ultimo valor do Array.
array.pop(35)
console.log(array)              //Ou passar um valor de do () para escolher qual retirar do array.

delete array[1]                  //Outra forma de Deletar valor do array dentro do [].

console.log(array)