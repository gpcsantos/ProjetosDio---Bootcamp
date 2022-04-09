//tipos primitivos

//boleano
var vOuF = false;
console.log(vOuF);
console.log(typeof(vOuF));


//number
var numQualquer =1;
console.log(typeof(numQualquer));

//string
var nome='glaucoSantos';
console.log(typeof(nome));

//como declarar vairáveis
//utilizando var, escopo global, caso não atribua valores, será undefined
var variavel = 'glauco';
variavel = 'Santos';
console.log(variavel);

//let tem escopo local, caso não atribua valores, será undefined
let outraVar;
console.log(outraVar);

//constante
//const escopo local (Bloco), somente leitura, obrigatorio valor inicial
const var3 = 'Santos';
//var3 = "glauco Santos"; não é possível atribuir novos valores para uma constante
console.log(var3);

//Escopo global e local

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}

escopoLocal();