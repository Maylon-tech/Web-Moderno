const nome = 'Maylon'
const concatenacao = 'Ola ' + nome + '!'

const templete = `
    Olá ${nome}
`

console.log(concatenacao, templete)

console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)