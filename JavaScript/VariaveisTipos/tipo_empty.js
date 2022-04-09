// valores empty (vazio, declarado como vazio), null (nulo, somente declarado), undefined (indefinido, não declarado)

//console.log(abacaxi); //retorna um erro abacaxi is not defined (não foi definido)
//console.log(typeof(abacaxi));

let abacaxi;
console.log(typeof(abacaxi)); // continua sendo indefinido, pois não foi atribuido nada à variável abacaxi


let abacaxi2 = "";
console.log(typeof(abacaxi2)); // sting vaizia, porém é uma string


abacaxi2 = null
console.log('tipo abacaxi: ',typeof(abacaxi2)); 
console.log(`abacaxi: ${abacaxi}`);
console.log(`abacaxi === true: ${abacaxi === true}`);
console.log(`abacaxi === false: ${abacaxi === false}`); 
