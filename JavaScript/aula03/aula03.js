// o que são vetores ou arrays

//como declarar um array
// pode ser qualquer tipo de variável

let array1 = ['string', 1, true];
console.log(array1);

// array pode guardar vários tipos de dados
let array2=['string', 1, true, ['aaray1',2,3],[4,5,false],['array...']];
console.log(array2);


//forEach
console.log("=====================");
console.log("forEach");
array2.forEach(function(item, index){console.log(item, index)});
console.log("=====================");

//Push
console.log("=====================");
console.log("Push");
array2.push("elefante");
console.log(array2);
console.log("=====================");

//Pop
console.log("=====================");
console.log("POP");
array2.pop();
console.log(array2);
console.log("=====================");

//shift
console.log("=====================");
console.log("SHIFT");
array2.shift();
console.log(array2);
console.log("=====================");

//unShift
console.log("=====================");
console.log("unShifit");
array2.unshift('novo valor');
console.log(array2);
console.log("=====================");

//indexOf
console.log("=====================");
console.log("indexOf");
console.log(array2.indexOf(true));
console.log("=====================");

//splice
console.log("=====================");
console.log("Splice");
array2.splice(0, 3);
console.log(array2);
console.log("=====================");

//slice
console.log("=====================");
console.log("Slice");
let arrayfinal = array2.slice(1,2);
console.log(arrayfinal);
console.log("=====================");


//objeto definido por {}
console.log("=====================");
console.log("Objeto");
let object = { string :'string', number: 1, boolean: true, array:['array'], objectInterno:{objectInterno: "objeto interno"}};
console.log(object);

console.log(object.array)

// acessando um valor do objeto através da desestruturação
var teste = object.boolean;
console.log("Valor do teste: ",teste);

//Outra forma de desestruturação
var {string, number, boolean} = object
console.log(string, number, boolean)
