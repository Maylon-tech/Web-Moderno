// for(var i=0;i <= 3;i++) {
//     console.log(i)
// }

// console.log(i)


// for(let i=0;i <= 3;i++) {
//     console.log(i)
// }

// console.log(i)

const funcs = []
// Var nao escopo de funcao.
for (var i = 0;i < 10;i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

const funcs2 = []
// Let permite o uso da funcao do escopo local. respeitando a saida do dados corretos.
for (let i = 0;i < 15;i++) {
    funcs2.push(function() {
        console.log(i)
    })
}
funcs2[2]()
funcs2[8]()