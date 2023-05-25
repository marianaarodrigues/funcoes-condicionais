function bhaskar() {
    let a = parseFloat(document.getElementById('valora').value)
    let b = parseFloat(document.getElementById('valorb').value)
    let c = parseFloat(document.getElementById('valorc').value)
    let delta = parseFloat(b * b - 4 * a * c)
    console.log(delta)
    if (delta <= 0) {
        imaginarias = 'Não existem raízes reais'
        document.getElementById('bhask').innerHTML = imaginarias
    }
    else {
        let raiz1 = (parseFloat((-1 * b + Math.sqrt(delta)) / (2 * a))).toFixed(2)
        let raiz2 = (parseFloat((-1 * b - Math.sqrt(delta)) / (2 * a))).toFixed(2)
        let resultado = raiz1 + ' e ' + raiz2
        document.getElementById('bhask').innerHTML = resultado
    }
}

function divis() {
    let a = parseFloat(document.getElementById('numerador').value)
    let b = parseFloat(document.getElementById('denominador').value)
    if (b == 0) {
        resultadodiv = 'Não existe divisão por zero'
        document.getElementById('resdivisao').innerHTML = resultadodiv
    }
    else {
        let resdiv = (parseFloat(a / b)).toFixed(2)
        document.getElementById('resdivisao').innerHTML = resdiv
    }
}

function msegundo() {
    let velkm = parseFloat(document.getElementById('kmporhora').value)
    let velm = (velkm / 3.6).toFixed(2)
    resveloc = velm + ' (Não consegui entender qual a divisão entre variáveis)'
    document.getElementById('velmpors').innerHTML = resveloc
}

function celsfahr() {
    let celsius = parseFloat(document.getElementById('celsius').value)
    let fahrenheit = (1.8 * celsius + 32).toFixed(2)
    restemp = fahrenheit + ' (Não consegui entender qual a divisão entre variáveis)'
    document.getElementById('celsiusfahr').innerHTML = restemp
}

function realemdolar() {
    let cotacao = parseFloat(document.getElementById('cotacao').value)
    let real = parseFloat(document.getElementById('reais').value)
    if (cotacao == 0) {
        resultadodiv = 'A cotação não pode ser zero'
        document.getElementById('realdolar').innerHTML = resultadodiv
    }
    else {
        let dolar = (real / cotacao).toFixed(2)
        document.getElementById('realdolar').innerHTML = dolar
    }
}