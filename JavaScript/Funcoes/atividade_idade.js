//Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos	} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}
const pessoa2 = {
    nome: 'Carla',
    idade: 50
}
const animal = {
    nome: 'Moana',
    idade: 4,
    raca: 'Beagle'
}
console.log(calculaIdade.call(pessoa1, 30));
console.log(calculaIdade.apply(animal, [2]));