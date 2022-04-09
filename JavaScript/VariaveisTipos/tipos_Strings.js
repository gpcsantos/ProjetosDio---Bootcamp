// Estruturas de Dados

// Tipagem dinâmica e fraca, não é preciso especificar o tipo antes de declarar a variável.
//   incluindo, é possival alterar o tipo de uma variável, alterando o valor atribuido à ela

let a = 1; //tipo número
console.log(typeof(a));
a = "era um numero, agora é string"; //mudando o tipo da variável
console.log(typeof(a));
console.log('valor de a: ',a)

// Tipos primitivos : numbers / strings / boolean / null / undefined
// Composite (não primitivos): objects, arrays


///   +++++++++++ tipo Strings

let nome = 'João';
let sobrenome = 'Pedro';

console.log(typeof(nome));
console.log(typeof(sobrenome));

let concatenado = nome.concat(sobrenome); //junta as variáveis, mas não insere espaço entre as variáveis
console.log(concatenado);

// string é iterável é possivel obter o acessar cada caracter da string, como se fosse um array

console.log('indice 2 da variaável nome: ', nome[2]);
// inserir um espaço entre nome e sobrenome;

concatenado = nome +" "+ sobrenome; // concatena e insere sequencia de carateres.
concatenado = nome +"\n "+ sobrenome; // javaScript scapes \n quebra de linha

concatenado = `${nome} ${sobrenome}`; // para quebras linha não precisa do \n  (INTERPOLAÇÃO) usa o crase

var frase = 'ola, tudo bem?'

///   Metodo SPLIT, retora uma lista usando um delimitador;
console.log(frase.split(" ")); //separa, fatia  em uma lista

// Metodo startsWith: Começa com
// Metodo endsWith: termina com
// Método length: cumprimento da string
// Método inlcude: Contém 
// Método replace: substitui um trecho da string por outro


frase.includes('tudo');
console.log('Slice: '+frase.slice(2,6));
console.log('Strar With: '+frase.startsWith('O'));

//INTERMPOLAÇÃO






