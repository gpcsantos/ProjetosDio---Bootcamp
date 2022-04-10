/**
 *  AROWW FUNCTIONS
 *  
 *   é representada pela => (seta) 
 *  sepre está associada à uma variável ou constante
 * - caso exixta apenas uma lina, pode dispensar as chaves e o return
 * - caso exista somente um parametro, pode dispensar os parenteses
 * - Arrow function NÃO faz HOISTING
 * 
 */

// 
const helloWord = function(){
    return'Hello Word';
};
//diminuindo o códio com Arrow function 
const helloWord1 = () => {
    return'Hello Word';
};
//diminuindo ainda mais com Arrow function 
const helloWord2 = () => 'Hello Word'; //não precisa de um retunr pode ser utilizado para funções muito pequenas, não precisa do return nem das chaves {}

const soma = (a, b) => a + b;
soma (4, 5);

const soma1 = a => a; //caso exista somente um parametro, pode dispensar os parenteses
soma(4);


/** 
 *      RESTRIÇÕES na utilização de arrow functions
 *  
 *  - "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;
 *  - não existe o objeto "arguments"
 *  - o construtor (ex: new MeuObjeto()) também não pode ser utilizado
 * 
 * 
 */