//tipos de funções

//funções declarativas  - tem que ter um nome

function funcao(){
    console.log('Sou uma mensagem de uma função declarativa!')
}

funcao();


// expressões de funções

//com noemação
var funcao = function funcao1(){
    console.log('Sou uma mensagem de função de expressão!')
}

funcao();

// sem nomeação
var func = function(){
    console.log("sou um mensagem de função de espressão, sem nome")
}
func();

//arrow function
var arrow = () =>{
    console.log("sou uma arrow function")
}
arrow();