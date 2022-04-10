/**
 *  loop dentod de elementoss iteráveis (arrays, strings)
 * 
 * 
 */
console.log('========================================================\n         FOR');
function multiplicaPorDois(arr){
    let multiplicados = [];

    for (let i=0; i < arr.length; i++){
        multiplicados.push(arr[i] * 2);
    }
    return multiplicados;
}

const meuArray = [2, 4, 33, 256, 512, 50]
console.log(`Meu Array: ${meuArray}
Multiplicado ${multiplicaPorDois(meuArray)}`);

/**
 *   FOR...IN
 *  loop entre propriedades enuméraveis de um objeto
 * 
 */
console.log('========================================================\n         FOR IN');
function forInExemplo(obj){
    for (prop in obj){
        console.log(`${prop}: ${obj[prop]}`);       
    }
}

const meuObj = {
    nome: 'João',
    idade: '34',
    cidade: 'Salvador'
}

forInExemplo(meuObj);

/**
 *   FOR...OF
 *  loop entre estruturas iteráveis (arrays, strings)
 * 
 */
console.log('========================================================\n         FOR OF');
function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

function logNumeros(nums){
    for (num of nums){
        console.log(num);
    }
}

const palavra = 'abacaxi';
const nums = [30, 20, 233, 2];

logLetras(palavra);
logNumeros(nums);



/**
 *  WHILE 
 *  Executa instruções até que a condição se torne falsa.
 * 
 */
console.log('========================================================\n          WHILE');
function exemploWhile(){
    let num = 0;

    while (num <= 5){
        console.log(num);
        num++
    }
}
exemploWhile()

/**
 *  DO WHILE 
 *  Executa instruções até que a condição se torne falsa.
 *  Porém sempre irá executar a instrução uma vez
 * 
 */
 console.log('========================================================\n          DO WHILE');

 function exemploDoWhile(){
    let num = 6;

    do{
        console.log(num);
        num++
    }while (num <= 5)
}
exemploDoWhile()