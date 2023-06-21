/// array de notas

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0, 2.3]

// Sem Callback  - LOOp  + IF  + Push novao array.
const notasBaixas1 = []

for(let i in notas){
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com CallBack

const notasBaixas2 = notas.filter( nota => {
    return nota < 7
})
console.log(notasBaixas2)