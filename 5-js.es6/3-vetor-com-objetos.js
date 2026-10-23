//vetor de objetos (usuarios)

const usuarios = [
        {nome: 'Marta', idade: 30},
        {nome: 'José', idade: 40},
        {nome: 'Maria', idade: 50},
        {nome: 'Marcela', idade: 60},
]

console.log('\nexibindo todos os usuarios do vetor: ')
usuarios.forEach(u => console.log(`${u.nome}tem ${u.idade} anos.`))


console.log('\nFiltrando usuários com idade acima de 50 anos: ' )
const maiordeCinquenta =  usuarios.filter(u => u.idade >= 50)
maiordeCinquenta.forEach(u => console.log(`${u.nome} tem ${u.idade} anos.`))

console.log('\nExibindo apenas os nomes: ')
const nomes = usuarios.map(u => u.nome)
nomes.forEach(u => console.log(`${u.nome};`))

console.log('\nExibindo apenas os nomes: ')
const nome = usuarios.map(u => u.nome)
nomes.forEach(nome => console.log(`${nome};`))

console.log('\nEncontrando um usuario: ')
const usuarioEncontrado = usuarios.find(u => u.nome === 'Marta')
console.log(usuarioEncontrado)
//console.log(`${usuarioEncontrado.nome} tem %`)