//calculadora

function calculadora(){
    const operacao = prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)');
    console.log(typeof(operacao));

    if (!operacao || operacao >= 7){
        alert('Opção inválida!');
        calculadora();
        
    }else{
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2){
            alert('parametros inválidos');
            calculadora();
        }else{

            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOpracao()
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOpracao()
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOpracao()
            }
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOpracao()
            }
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOpracao()
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado à ${n2}ª  é igual a ${resultado}`);
                novaOpracao()
            }
            function novaOpracao(){
                let opcao = prompt('Deseja realizar outra operação? \n 1 - SIM\n 2 - NÃO');
                if (opcao == 1){
                    calculadora()
                }else if (opcao == 2){
                    alert('Obrigado e até mais!');
                }else{
                    alert('Escolha uma opção válida!');
                    novaOpracao();
                }
            }
        }    

        if (operacao == 1 || operacao == '+'){
            soma()
        }else if (operacao == 2  || operacao == '-'){
            subtracao()
        }else if (operacao == 3  || operacao == '*'){
            multiplicacao()
        }else if (operacao == 4  || operacao == '/'){
            divisaoReal()
        }else if (operacao == 5  || operacao == '%'){
            divisaoInteira()
        }else{
            potenciacao()
        }
    }
}




calculadora();