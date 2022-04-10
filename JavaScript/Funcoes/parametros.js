/**
 *  como maipular parametros em uma função e algumas técnicas para lidar com número indefinido de parâmentros
 * 
 * 
 *  objeto ARGUMENTS
 *  um array com todos os parametros passados quando a função foi invocada
 * objeto iterável, pode ser manipulado como um array...
 *  EXEMPLO
 */

function findMax(){
     // o fato de não ter declarado acrgumentos significa que podemos enviar nenhum ou vários argumentos
     // ou seja, um númeor indefinido de argumentos
     if (arguments[0] === null || arguments[0] === undefined) return false; // arguments vai dar uma lista de todos os argumentos que foram enviado ao chamar a função
     if (arguments.length === 0) return false;
     let max = -Infinity; // garantir que podemos enviar numeros positivos ou negativos

     for (let i = 0; i < arguments.length; i++){  // loop para percorrer os argumentos e verificar qual o maior valor
         if (arguments[i] > max){
             max = arguments[i];
         }
     }
     return max;
}

console.log('lista de numeros: ',findMax(1 ,2, 3, 4, 5, 90, 6, 10));
console.log('lista de vazio: ',findMax());
console.log('lista indefinido: ',findMax(undefined));
console.log('lista null: ',findMax(null));

function showArgs(){
    return arguments;
}

console.log('Mostra argumentos: ',showArgs(1 ,2, 3, [36, 71, 46], 5, 90, 'string', 10));