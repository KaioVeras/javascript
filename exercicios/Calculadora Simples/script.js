function somar() 
{
    let soma01 = window.document.querySelector('#soma01')
    let soma02 = window.document.querySelector('#soma02')
    let ressoma = window.document.querySelector('#somares') 
    n1 = Number(soma01.value)
    n2 = Number(soma02.value)
    resposta = n1 + n2
    ressoma.innerHTML = `${resposta}`   
}

function subtrair() {
    let sub1 = window.document.querySelector('#sub01')
    let sub2 = window.document.querySelector('#sub02')
    let subres = window.document.querySelector('#subres')
    n1 = Number(sub1.value)
    n2 = Number(sub2.value)
    resposta = n1 - n2
    subres.innerHTML = `${resposta}`
}

function multiplicar() {
    let mul01 = window.document.querySelector('#mul01')
    let mul02 = window.document.querySelector('#mul02')
    let mulres = window.document.querySelector('#mulres')
    let n1 = Number(mul01.value)
    let n2 = Number(mul02.value)
    resposta = n1 * n2
    mulres.innerHTML = `${resposta}`
}

function dividir() {
    let div01 = window.document.querySelector('#div01')
    let div02 = window.document.querySelector('#div02')
    let divres = window.document.querySelector('#divres')
    let n1 = Number(div01.value)
    let n2 = Number(div02.value)
    resposta = n1 / n2
    divres.innerHTML = `${resposta}`
}