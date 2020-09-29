/*Crie uma página que contenha:
Um botão ao qual será associado um event listener;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.*/
let contadorDeClique = 0;
let numeroDeCliques = document.querySelector('#contador');

document.querySelector('#botao_contador').addEventListener('click', () =>
    numeroDeCliques.innerHTML = contadorDeClique += 1)