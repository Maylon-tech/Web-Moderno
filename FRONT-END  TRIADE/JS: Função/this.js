        //  THIS   01  PODE VARIAR

// UMA FORMA DE REFERENCIAR O OBJETO DAQUELA EXECUSAO.

function f1(){
    console.log(this === window)
}
f1()
// nesse caso o This e TRUE


document.getElementsByTagName('body')[0].onclick = f1()
// Nesse caso o This e FALSE. 

const f3 = () => console.log(this === window)
f3()

function action() {
    alert('ola')
}
addEventListener('keydown', action)





