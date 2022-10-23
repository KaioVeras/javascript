// 1 - Usando a função prompt(), leia um número fornecido pelo usuário. Se for positivo calcule a raiz quadrada e caso
// seja negativo mostre um console.log com a mensagem “Número inválido”.

let numero = Number(prompt('Digite um número: '))
if (numero > 0) {
    console.log(`A raiz quadrada do número é: ${Math.sqrt(numero)}`)
} else {
    console.log(`Número inválido`);
}

