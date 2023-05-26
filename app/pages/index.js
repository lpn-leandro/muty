'use strict';

/**Exigencias do lint
- Uso do use strict
- Uso de ponto e virgula no final
- Exigencia do uso de === invés de ==
- Evitar espaços em branco no texto Exemplo= 
- Exigencia do uso de variaveis no estilo camelCase ou UPPER_CASE com Underline
-

**/

//checklist prompt, alert, confirm.
document.getElementById('perguntaSecreta').onclick = function () {
    let resposta = window.prompt("Qual é o seu nome?");
    let confirmacao = window.confirm(`O seu nome realmente é ${resposta}?`);
    if (confirmacao) {
        window.alert(`Seu nome realmente é ${resposta}`);
    } else {
        window.alert(`Seu nome não é ${resposta}`);
    }
};

//Checklist setInterval
document.getElementById('secret-button').onclick = function () {
    let tempo = 0;
    let chave = setInterval(function () {
        document.getElementById('contador').innerHTML = `${++tempo}`;
    }, 1000);
    document.getElementById('clone-secret-menu').onclick = function () {
        setTimeout(clearInterval(chave), 500);
    };
};

//Checklist setTimeout
document.getElementById('secret-button').onload = setTimeout(function () {
    let button = document.getElementById('secret-button');
    button.removeAttribute("disabled");
}, 10000);

//Checklist funções

//https://cloudinary.com/

window.onload = function listarAlbums() {
    let albums;
    if (localStorage.getItem("albums") === null) {
        albums = [];
    } else {
        albums = JSON.parse(localStorage.getItem("albums"));
    }

    let html = "";

    albums.forEach(function (element, index) {
        console.log('Element' + element + 'index' + index);
        html +=`<div class="col">
                <div class="card h-100">
                    <a href="./app/pages/album-details/album-details.html/${index}"><img src="${element.albumArt}"
                     class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="card-title">${element.albumName}</h5>
                        <p class="card-text">${element.albumArtist}</p>
                        <div>${element.albumRate}</div>
                    </div>
                </div>
            </div>`;
    });

    document.querySelector("#albumsList").innerHTML = html;
};