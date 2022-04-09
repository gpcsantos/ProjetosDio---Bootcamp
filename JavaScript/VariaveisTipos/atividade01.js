// veririficar se uma frase é um palindromo
// Palíndromo: frase ou palavra que se pode ler, indefinidamente, da esquerda para a direita ou vice-versa


//solução 01
function verificaPalindromo(string){
    if (!string) return "String inexistente";

    return string.split('').reverse().join('') === string;

}
console.log("OVO é palindromo: ",verificaPalindromo('ovo'));
console.log("AMA é palindromo: ",verificaPalindromo('ama'));
console.log("AMAR é palindromo: ",verificaPalindromo('amar'));
console.log("string vazia: ",verificaPalindromo(''));

let myVar;
let myVarNull = null;
console.log("string vazia myVar sem atribuição de valores: ",verificaPalindromo(myVar));
console.log("myVarNull = null: ",verificaPalindromo(myVarNull));

//solucao02
// premissa: checar dois caracteres por vez
function verificaPalindromo2(string){
    if (!string) return "String inexistente";

    for (let i=0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 -i]){
            return false;
        }
    }
    return true;

}
console.log("OVO é palindromo: ",verificaPalindromo2('ovo'));
console.log("AMA é palindromo: ",verificaPalindromo2('ama'));
console.log("AMAR é palindromo: ",verificaPalindromo2('amar'));
