let contador = 1

// Conar de 1 a 10.
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

// contar de 1 a 10 com prefixo
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

// loop com Array, percorrendo e com output.
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(i = 0; i < notas.length;i++){
    console.log(`nota = ${notas[i]}`)
}

//  no uso do For In.. 

for(i in notas){
    console.log(i, notas[i])
}

