// Estruta da função... Inicia com a palavra function, seguida do nome da função, parenteses e parametors (ou não) e as chaves onde serão inseridos os códigos
// a lógia da função 

//Ex.:
function soma1 (num1, num2){
    return num1 + num2;
}

// função anonima, é uma função atribuida a uma variável... assim não é preciso informar o nome da função
// Ex.:

const soma2 = function(a, b){
    return a + b;
}

// como chamar uma função 
console.log("Chamada da função tradicional: ",soma1( 1, 3));
console.log('chamada da função anonima: ',soma2( 1, 3))