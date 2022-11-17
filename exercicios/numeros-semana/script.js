// 4 - Usando o switch escreva um código que leia um inteiro de 1 a 7 e retorne um console.log( ) com o dia da semana
// em texto. Exemplo, se for digitado 1 o texto retornado deve ser "Segunda".

var numero = Number(prompt('Digite um número: '))

switch (numero) {
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3: 
        console.log('Quarta');
        break;
    case 4: 
        console.log('Quinta');
        break;
    case 5: 
        console.log('Sexta');
        break;
    case 6: 
        console.log('Sábado');
        break;
    case 7: 
        console.log('Domingo');
        break;
    default:
        console.log('[ERRO]');
        break;
}

