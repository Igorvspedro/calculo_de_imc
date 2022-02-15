(function () {
    const altura = document.querySelector('#altura');
    const peso = document.querySelector('#peso');
    const botao = document.querySelector('button');
    const resposta = document.querySelector('#resposta');

    botao.onclick = function () {
        const resultado = calcularIMC(parseFloat(altura.value), parseFloat(peso.value));
        const classificacao = classificar(resultado);
        resposta.textContent = 'O IMC é ' + resultado + ', sua classificação é: ' + classificacao;
    }

})();

function calcularIMC(altura, peso) {
    const alturaAoQuadrado = altura * altura;
    return (peso / alturaAoQuadrado).toFixed(2);
}

function classificar(resultado) {  
    let classificacao = '';

    if (resultado < 18.5) {
        classificacao = 'abaixo do peso';
    } else if (resultado > 18.6 && resultado <= 24.9) {
        classificacao = 'peso ideal';
    } else if (resultado > 25 && resultado <= 29.9) {
        classificacao = 'Sobrepeso';
    } else if (resultado > 30 && resultado <= 34.9) {
        classificacao = 'obesidade grau 1';
    } else if (resultado > 35 && resultado <= 39.9) {
        classificacao = 'obesidade grau 2';
    } else if (resultado > 40) {
        classificacao = 'vai se tratar garoto(a)';
    }

    return classificacao;
}