(function () {
    const altura = document.querySelector('#altura');
    const peso = document.querySelector('#peso');
    const botao = document.querySelector('button');
    const resposta = document.querySelector('#resposta')

    botao.onclick = function () {
        const resultado = calcularIMC(parseFloat(altura.value), parseFloat(peso.value));
        resposta.textContent ='O IMC é ' + resultado;
    }

})();

function calcularIMC(altura, peso) {
    const alturaAoQuadrado = altura * altura;
    return (peso / alturaAoQuadrado).toFixed(2);
}
