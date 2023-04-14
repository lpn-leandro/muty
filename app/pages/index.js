'use strict';
import "../util/shared.js";

//checklist prompt, alert, confirm.
document.getElementById('perguntaSecreta').onclick = function () {
    let resposta = window.prompt("Qual é o seu nome?");
    let confirmacao = window.confirm(`O seu nome realmente é ${resposta}?`);
    if (confirmacao) {
        window.alert(`Seu nome realmente é ${resposta}`);
    } else {
        window.alert(`Seu nome não é ${resposta}`);
    }
}

//Checklist setInterval
document.getElementById('secret-button').onclick = function () {
    let tempo = 0;
    let chave = setInterval(function () {
        document.getElementById('contador').innerHTML = `${++tempo}`;
    }, 1000);
    document.getElementById('clone-secret-menu').onclick = function () {
        setTimeout(clearInterval(chave), 500);
    }
}

//Checklist setTimeout
document.getElementById('secret-button').onload = setTimeout(function () {
    let button = document.getElementById('secret-button');
    button.removeAttribute("disabled");
}, 10000);

//Checklist funções

//https://cloudinary.com/