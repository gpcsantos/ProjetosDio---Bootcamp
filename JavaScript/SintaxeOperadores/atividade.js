/*
 sintaze e operadores

 Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
*/

// function atividade(num1, num2){
//     let msg = 'Os números ' + num1 + ' e ' + num2;
//     let soma = num1 + num2;
    
//     (num1 === num2) ? msg = msg + ' são iguais.' : msg = msg + ' não são iguais.';

//     (soma >=10  && soma <= 20) ? msg = msg + 'Sua soma é '+ soma +' que é maior que 10 e menor que 20' : msg = msg + 'Sua soma é '+ soma +' que é menor que 10 e menor que 20'  ;

    
//     console.log(msg)
    
// }

// num1 = Number(prompt("informe o primério número inteiro"));
// num2 = Number(prompt("informe o segundo número inteiro"));

// atividade(num1, num2)

//// +++++++++++++++++++++++++++++++++++++
// RESOLUÇÃO

function comparaNumeros(num1, num2){
    const primeiraFase = criaPrimeiraFrase(nume1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return '${primeirafrase) $(segundaFrase)'

    
}
function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';
    if(num1 !== num2){
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguas} são iguais`;
}
function criaSegundaFrase(num1, num2){
    const soma =  num1 + num2;

    let resultado10 = 'menor'; 
    let resultado20 = 'menor';
    
    const compra10 = soma > 10;
    const compra20 = somma > 20;

    if (compra10){
        resultado = 'maior';
    }
    if (compra20){
        resultador = 'maior';
    }

}
console.log(compr)


