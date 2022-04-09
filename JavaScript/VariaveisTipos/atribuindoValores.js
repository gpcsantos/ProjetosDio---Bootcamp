numberOne  = 1;  // Hoisting 

console.log(numberOne + 2);

// é possivel fazer a declaração da variável, mesmo depois de inicializa-la glovalemnte, com feito na linha 1 (hoisting)
// só será possível declarar com VAR, pois, na compilação o JavaScript leva a declaração para antes da inicialização
// se utilizarmos LET, o javaScript apresantará um erro, pois o LET não possui a mesma característica do VAR

//let numberOne;  // irá apresentar erro, pois a variável numberOne já foi inicilizada na linha 1

var numberOne; // não apresentará erro...


console.log('numberOne: '+numberOne);


/// difernça entre o uso do VAR e LET

//var pode reatribo
// let não pode ser reatribuido, utilizado por escopo (bloco)

var firstName = 'João';
var lastName = 'Souza';
let sobrenome = 'Rodrigues'; // let nessa linha tem, como se fosse, um escopo global.. oo bloco é todo o script

if (firstName === 'João'){
    var firstName = 'Pedro';
    let lastName = 'Silva;'   // let aqui tem o escopo do bloco (dentro do if)

    console.log(firstName , lastName);  //irá printar Pedro Silva
}

console.log(firstName , lastName); //irá printar Pedro Souza


///   CONSTANTES
// declaradas em SNAKE_UPPER_CASE
// tem escopo de bloco
// não faz HOISTING
// não permite fazer alteração  em seu conteúdo (reatribuir)
// não pode redeclarar

const FRIST_NAME = 'Glauco';


/// por convensão dar preferencia para o uso do LET
