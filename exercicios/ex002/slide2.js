// 1 - Usando a função prompt(), leia um número fornecido pelo usuário. Se for positivo calcule a raiz quadrada e caso seja negativo mostre um console.log com a mensagem “Número inválido”.

// let numfor = prompt(`Digite um número positivo: `);
// let raiz = Math.sqrt(numfor)

// if (numfor >= 0) {
//     console.log(`Número informado: ${numfor}`);
//     console.log(`A raiz quadrada do número: ${raiz}`);
// } else {
//     console.log(`[ERRO] Número inválido.`);
// }


// ==============================================================


// 2 - Usando a função prompt( ), peça para o usuário digitar o salário de um trabalhador e o valor de uma prestação de um empréstimo feito. Se a prestação do empréstimo for maior que 20% do salário mostre um console.log( ) com a frase
// “Empréstimo não poderá ser concedido”, caso contrário mostre “Empréstimo pode ser concedido”.

// let salario = prompt(`DIgite o seu salário: `);
// let prestacao = prompt(`Digite o valor da prestação: `);
// let porcento = salario * 20 / 100;

// if (prestacao > porcento) {
//     console.log(`Empréstimo não poderá ser concedido.`);
// } else {
//     console.log(`Empréstimo pode ser concedido.`);
// }


// ==============================================================


// 4 - Usando o switch escreva um código que leia um inteiro de 1 a 7 e retorne um console.log( ) com o dia da semana em texto. Exemplo, se for digitado 1 o texto retornado deve ser “Janeiro”.

// let semana = prompt('Digite um número inteiro de 1 a 7: ');
// semana = Number(semana);

// switch (semana) {
//     case 1:
//         semana = 'Domingo';
//         break;
//     case 2: 
//         semana = 'Segunda' ; 
//         break;
//     case 3:
//         semana = 'Terça';
//         break;
//     case 4:
//         semana = 'Quarta';
//         break;
//     case 5:
//         semana = 'Quinta';
//         break;
//     case 6: 
//         semana = 'Sexta';
//         break;
//     case 7: 
//         semana = 'Sábado';
//         break;
// }
// console.log(semana);


// ==============================================================


// 5 - A empresa MARSHAL S.A trabalha com o aumento salarial de seus colaboradores de acordo com uma tabela que leva em
// consideração o salário atual e o tempo de casa. O percentual de aumento segue a ideia de quanto menor o ganho maior o reajuste. Outro ponto importante é que os funcionários com mais tempo de casa recebem um bônus maior. Crie um software que peça:

// - o valor atual do salário e o tempo de serviço de um funcionário.
// Com base nas informações fornecidas pelo usuário e na tabela abaixo mostre o novo salário com reajuste ou a
// mensagem, “Você não tem direito à reajuste”, caso o colaborador não tenha direito.


// console.log('======= SISTEMA SALARIAL =======');

// let salario = prompt('Digite o valor do seu salário: ');
// let tempo_serviço = prompt('Digite seu tempo de serviço: ');
// salario = Number(salario);

// if (salario <= 500 && tempo_serviço < 1) 
// {
//     console.log(`Salário atual: R$${salario}`);
//     console.log(`Salário com reajuste: R$${salario + salario * 25 / 100}`);
//     console.log(`Você não tem direito a bônus.`);
// }
// else if (salario > 500 && salario <= 1000 && tempo_serviço > 1 && tempo_serviço <= 3) 
// {
//     console.log(`Salário atual: R$${salario}`);
//     console.log(`Salário com reajuste: R$${salario + salario * 20 / 100}`);
//     console.log(`Você tem direito a um bônus de R$100`);
//     console.log(`Salário final: R$${(salario + salario * 20 / 100) + 100}`);
// }
// else if (salario > 1000 && salario <= 1500 && tempo_serviço >= 4 && tempo_serviço <= 6)
// {
//     console.log(`Salário atual: R$${salario}`);
//     console.log(`Salário com reajuste: R$${salario + salario * 15 / 100}`);
//     console.log(`Você tem direito a um bônus de R$200`);
//     console.log(`Salário final: R$${(salario + salario * 15 / 100) + 200}`);
// }
// else if (salario > 1500 && salario <= 2000 && tempo_serviço >= 7 && tempo_serviço <= 10)
// {
//     console.log(`Salário atual: R$${salario}`);
//     console.log(`Salário com reajuste: R$${salario + salario * 10 / 100}`);
//     console.log(`Você tem direito a um bônus de R$300`);
//     console.log(`Salário final: R$${(salario + salario * 10 / 100) + 300}`);
// }
// else if (salario > 2000 && tempo_serviço > 10 && tempo_serviço < 40)
// {
//     console.log(`Salário atual: ${salario}`);
//     console.log(`Você não tem direiro a reajuste.`);
//     console.log(`Você tem direito a um bônus de R$500`);
//     console.log(`Salário final: R$${salario + 500}`);
// }
// else {
//     console.log(`[ERRO] Condições inválidas `);
// }






