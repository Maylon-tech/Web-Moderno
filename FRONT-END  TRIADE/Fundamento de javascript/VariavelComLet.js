// Variavel sera correspondido conforme o seu escopo. Se tiver dentro do escopo Menor entao tera preferencia.
let numero = 3
{
    let numero = 5
    console.log('dentro =', numero)
}
console.log('fora', numero)

