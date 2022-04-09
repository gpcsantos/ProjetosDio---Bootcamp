// listas iteráveis de elemntos, possui indice e, começa com indice 0

let array = [];
console.log(typeof(array)); // array é do tipo object

// incluir alog no array
//metodo push  - insere na ultima posição do array

array.push(3);
array.push(2);
console.log('tamanho do array: ', array.length);
console.log(array);

//metodo pop - exclui a ultima posição do array
array.pop();
console.log('tamanho do array: ', array.length);
console.log(array);

array.push(2);
array.push(5);
console.log('tamanho do array: ', array.length);
console.log(array);

// metodo SHIFT - retira o primeiro elemento
array.shift();
console.log('tamanho do array: ', array.length);
console.log(array);

// metodo UNSHIFT - adiciona um novo primeiro elemento
array.unshift(10);
console.log('tamanho do array: ', array.length);
console.log(array);

//Iterabilidade
for (let i = 0; i < array.length; i++){
    console.log(`posição ${i}:  ${array[i]}`);
}

