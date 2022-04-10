/**
 *  se então senão
 * 
 *  etrutura 
 * 
 *  if (condicao) {
 *      código
 *  }else if(condicao){
 *      código
 *  }else{
 *      código
 *  }
 * 
 */

function numeroPositivo(num){
    let resultado;

    if (num >= 0 ){
        resultado = true;
    }else{
        resultado = false;
    }
    return resultado;
}

function numeroPositivo1(num){
    let resultado;
    
    const ehNegativo = num < 0;

    if (ehNegativo){
        resultado = false;
    }else{
        resultado = true;
    }
    return resultado;
}


//Tecnica CLEAN CODE
function numeroPositivo2(num){
    const ehNegativo = num < 0;

    if (ehNegativo){
        return false
    }
    return true;
}


console.log(`numero é positivo: ${numeroPositivo(2)}`);
console.log(`numero é positivo: ${numeroPositivo1(5)}`);
console.log(`numero é positivo: ${numeroPositivo2(-4)}`);


/**
 *  SWITCH/CASE
 *  
 *  - equivale a uma comparação tipo e valor (===)
 *  - Sempre precisa de um valor "default"
 *  - Ideal para quando se precisa comparar muitos valores
 * 
 */

function getAninal(id){
    switch(id){
        case 1: 
            return 'cão';
        case 2:
            return 'gato';
        case 3:
            return 'pássaro';
        default:
            return 'peixe';
    }
}

console.log('tipo animal: ',getAninal(1));
console.log('tipo animal: ',getAninal(2));
console.log('tipo animal: ',getAninal(3));
console.log('tipo animal: ',getAninal(10));
console.log('tipo animal: ',getAninal('1')); // comparação de tipo e valor
