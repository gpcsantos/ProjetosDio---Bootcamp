/**
 *  como tratar arrays e objetos
 * 
 * ARRAY
 *  SPREAD: uma forma de lidar separadamente com elementos
 *      o que era paste de um array se torna um elemento independente;
 * 
 * 
 * 
 */

function sum (x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 4];

console.log(sum(numbers)); //retornará undefined para os argumentos y e z
// isso irá enviar o array "agrupado" para o primeiro paramentro da função (x) e não somará os tres elementos do array
// para que consigamos somar todos os 3 elementos do array predisamos utlizar o SPREAD, como segue

console.log('soma dos elementos do array: ',sum(...numbers)); 
// o fato de colocar os 3 pontos (...numbers), antes da variável de tipo array indicar ao compilador que deverá enviar cada item do arrya para um parametro da função

/**
 *      REST fa o contrário do SPREAD
 * 
 *  REST: combia os argumenso de um array
 *      o que era um elemento independente se torna parte de um array
 *  
 */

function confereTeamanho(...args){ // REST usado quando estamos declarando a função
    console.log(args);
    return args.length;
}
// o rest, simbolizado pelos 3 pontos antes do argumento (...args) da função irá conbinar os elementos enviados separadamente em um array

console.log('tamanho de: ',confereTeamanho());
console.log('tamanho de: ',confereTeamanho(1,2));
console.log('tamanho de: ',confereTeamanho(1,2,3,4,5,6,7));


/**
 *      OBJECT DESESTRUCTURING
 *  
 *  desestruturação de objeto
 *  entre {} podemos filtrar apenas os dados que nos interessa em um objeto
 * 
 *  EXEMPLO:
 */
const user ={
    id: 44,
    displayName: 'gpcsantos',
    fullName: {
        firstName: 'Glauco',
        lastName: 'Santos'
    }
};

function userId({id}){
    return id;
}
function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`;
}
function getDisplayName({displayName}){
    return displayName;
}


console.log('ID: ', userId(user));
console.log('Full Name: ', getFullName(user));
console.log('Display Name: ', getDisplayName(user));