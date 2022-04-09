//Estrturas condicionais

var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 != -1){
    if (jogador1 > 0 && jogador2 == 0){
        console.log('Jogador 1 marcou ponto');
        placar = jogador1 > jogador2
    }else if (jogador2 > 0 && jogador1 == 0){
        console.log('Jogador 2 marcou ponto');
        placar = jogador2 > jogador1
    }else{
        console.log('Ninguém marcou ponto');
    }
}

//if ternário
jogador1 != -1 && jogador2 !=-1 ?console.log('Os jogadores são válidos') : console.log('Jogadores inválidos');


//Switch case
switch (placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou!');
    default:
        console.log('Ninguém ganhou!');
}

//estrutura de repetição
//FOR
let array=['valor1','valor2','valor3','valor4','valor5','valor6','valor7'];
let object = {propriedade1: 'valor1',propriedade2: 'valor2', propriedade3: 'valor3'}

// for executa uma instrução até que ela seja falsa
for (let i=0 ; i < array.length; i++){
    console.log('indice: ', i, ' - ',array[i]);
}

//fo in
//executa repetição a partir de uma propriedade 
//com arraya
for (let i in array){
    console.log(i);
}

//com object
for ( i in object){
    console.log(i);
}


// for of
for (i of array){
    console.log(i);
}

//nao funciona bem com objetos
for (i of object.propriedade1){
    console.log(i);
}

//WHILE comparação é no início do laço
var a = 0;
while(a < 10 ){
    a++;
    console.log(a);
}

//DO WHILE - a comparação é no final do laço
// isso quer dizer que o laço será executado pelo menos uma vez
a=0;
do{
    a++;
    console.log(a)
}while(a < 10)
