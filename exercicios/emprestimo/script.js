// 2 - Usando a função prompt( ), peça para o usuário digitar o salário de um trabalhador e o valor de uma prestação de
// um empréstimo feito. Se a prestação do empréstimo for maior que 20% do salário mostre um console.log( ) com a frase
// “Empréstimo não poderá ser concedido”, caso contrário mostre “Empréstimo pode ser concedido”.

let salario = Number(prompt('Digite o valor do seu salário: '))
let prestacao = Number(prompt('Digite o valor da prestação: '))
let salario20 = (salario * 20) / 100

if (prestacao > salario20) {
    console.log(`Empréstimo não poderá ser concedido!`);
} else {
    console.log(`Empréstimo pode ser concedido!`);
}