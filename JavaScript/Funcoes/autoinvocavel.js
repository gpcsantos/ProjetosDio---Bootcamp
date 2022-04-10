/**
 *  Função autoinvocável
 *      conhecida pelo termo IIFE(Immediately Invoked Function Expression)
 *      uma função anonima entre parenteses, seguida por outro par de parênteses, que representa sua chamada 
 * 
 * ex: 
 *      (
 *          function() {
 *              ler name = 'Digital Inovention One';
 *              return name; 
 *          }
 *      )();
 * 
 * Mais exemplos: 
 * 
*/

(
    function(a, b){
        return a + b;
    }
)(1, 2);

const soma1 = (
    function(a, b){
        return a + b;
    }
)(1, 2);

console.log(soma1);

/**
 *  CALLBACKS
 * 
 *      UMA FUNÇÃO PASSADA COMO ARGUMENTO PARA OUTRA FUNÇÃO
 *      Utilizando callbacks, você tem maior controle da ordem de chamadas.
 * 
 * exemplo
 */

const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const mult = function(num1, num2){
    return num1 * num2;
}

const div = function(num1, num2){
    return num1 / num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);
const resultMult = calc(mult, 2, 3);
const resultDiv = calc(div, 4, 2);

console.log('CALLBACKS')
console.log(`resultado da soma: ${resultSoma}`);
console.log(`resultado da subtração: ${resultSub}`);
console.log(`resultado da Multiplicação: ${resultMult}`);
console.log(`resultado da divisão: ${resultDiv}`);