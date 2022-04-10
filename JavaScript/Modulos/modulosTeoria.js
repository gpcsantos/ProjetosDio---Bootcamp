//o que são moduloes em JS

// como utilizar módulos

// altertar para algumas particularidades

// o que são
// são arquivos JS e tem a capacidade de importas e exportar informações de outros arquivos do mesmo tipo.
// vantagens:
// - organização do código;
// - compartilhamento de viariáveis em escopos diferentes;
// - explicita as dependências de arquvios


// EXPORTAR 
// Named export, exportar vária sfunções de um arquivo
// ex: export function <nomeFuncao>{} , ou seja, colocar a palavra export antes da declaração a function
// ou criar uma áea de export 
/* ex:
    export{
        <nomeFuncao01>,
        <nomeFuncao02>,
        <nomeFuncao03>
    }
*/

//DEFAULT Export, só pode haver um por arquivo e será o retorno padrão do arquivo

//IMPORTA

// importar Namer Exports
// inport{<funcao>, <vairável>, <classe>} from './<arquivo>/js

// import valorDefault FROM './<arquivo>.js'

// Usando Alias
// inport{arqivo AS Apelido} from './<arquivo>/js
// Apelido.metodo();


