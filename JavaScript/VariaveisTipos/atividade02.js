// atividade 02: troque os elementos pares e diferentes de 0 (zero) pelo numero 0 (zero). Se o array for vazio, retorne -1.


function verificaPar(array){
    if (!array) return -1;
    if (array.length === 0 ) return -1;
    for (let i=0; i < array.length; i++){
        if(array[i] !== 0 && array[i]%2 === 0 ){
            array[i] = 0;
        }
    }
    return array;
}

let array =null;
console.log(verificaPar(array));


