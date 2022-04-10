/**
 *      Apresenta o THIS
 * 
 *      referencia para o contexto o qual vc está
 */

 console.log('\n===================================================\n            usando o this');
const pessoa = {
    firstName   : "Glauco",
    lastName    : "Santos",
    id          : 1,
    fullName    : function(){
        return `${this.firstName} ${this.lastName}`;  //uma função dentro de um objeto é um MÉTODO
    },
    getId       : function(){
        return this.id
    }
    // this nesses casos fazem referência à propriedades do objeto pai
}
console.log(pessoa.fullName());
console.log(pessoa.getId());


/**
 *  contexto                        Referencia
 * em um objeto (método) ---------> próprio objeto dono do método
 *  sozinha  ---------------------> objeot global (em um navegador, windows - a janela do navegador)
 *  função  ----------------------> objeto global da função, fora de um objeto
 *  evento -----------------------> Elemento que recebeu o evento (exemplo o onClick de um botão, o this terá o escopo do botão que foi clicado)
 * 
 */
 console.log('\n===================================================\n            contextos do this');
console.log(this); // vazio, pos o objeto pai não contém nada, soment a janela do console
(function (){
    console.log(this);
})(); // retorna a informção de global da função

/**
 *      MANIPULANDO O VALOR DO THIS
 * 
 *       Metodo Call
 *  
 */

console.log('\n===================================================\n            Call');
const pessoa1 = {
    nome: 'Glauco'
}
const animal = {
    nome: 'Moana'
}

function getSomething(){
    console.log(this.nome);
}

getSomething.call(pessoa1); // o metodo call envia para o this da função o contexto do nome ao qual irá fazer a relação, nesse casso PESSOA1, irá retornar Glauco
getSomething.call(animal); // nesta caso ao informar 'animal' para o metodo call, a função ao receber aninal, o utilizará para o o contexto do this 

const myObj1 = {
        num1: 2,
        num2: 4 ,
};
function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(myObj1, 1, 5);



/**
 *      MANIPULANDO O VALOR DO THIS
 * 
 *       Metodo apply, muito parecido com o call
 *  
 */

 console.log('\n===================================================\n            Aplly');
 const pessoa2 = {
    nome: 'Glauco'
}
const animal1 = {
    nome: 'Moana'
}

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(pessoa2); // o metodo apply envia para o this da função o contexto do nome ao qual irá fazer a relação, nesse casso PESSOA1, irá retornar Glauco
getSomething.apply(animal1); // nesta caso ao informar 'animal' para o metodo apply, a função ao receber aninal, o utilizará para o o contexto do this 

// diferença entre o call e o apply
const myObj2 = {
    num1: 2,
    num2: 4,
};
function soma(a,b){
console.log(this.num1 + this.num2 + a + b);
}
soma.apply(myObj2, [1, 5]); // argumento da função precisa ser um array para os demais argumentos

/**
 *      MANIPULANDO O VALOR DO THIS
 * 
 *       Metodo Bind - clona a estutura da função onde é chamada e aplica o valor do objeto passado como parâmentro;
 *  
 */

 console.log('\n===================================================\n            Bind');
 const retornaNomes = function(){
     return this.nome;
 }

 let bruno = retornaNomes.bind({nome: 'Bruno'});
 console.log(bruno());