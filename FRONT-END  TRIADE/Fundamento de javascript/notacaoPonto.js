console.log(Math.ceil(7.2))

const obj1 = {}
obj1.nome = 'bola'
console.log(obj1.nome)


function Obj(nome, preco){
    this.nome = nome
    this.preco = preco
    this.exec = function() {
        console.log('exect,.,')
    }
}

const obj2 = new Obj('Maylon')
const obj3 = new Obj('Massao')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()