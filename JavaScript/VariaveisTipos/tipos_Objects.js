// objetos usamos {}
// estrutura chave, valor (parece um dicionário)

let person = {
    name: 'Jhon',
    age: 20, 
    adrress: 'rua 2'
}

let obj = {}
console.log(typeof(obj));

// adicionar valores ao objeto
obj.name = 'Glauco';
obj.age = 43;

console.log(obj);

//listar os valroes do abjeto
console.log('VALORES: ',Object.values(obj));
console.log('CHAVES: ',Object.keys(obj));

// acessando valores do objeto
console.log('person.name:',person.name);
console.log(`person['name']: ${person['name']}`);

// adicionando chave e valores à um objeto
person.numberOfSiblings = 2;
person['numberOfTwins'] = 0;

console.log('Chaves do Objeto: ', Object.keys(person));

let mom = "nameOfMom";

person[mom] = 'Maria Regina'; // irá o conteúdo da variável mon como uma chave dentro do objeto e vai atribuir a ela o valor de "Maria Regina"
console.log('Chaves do Objeto: ', Object.keys(person));
console.log('Person: ', person);

