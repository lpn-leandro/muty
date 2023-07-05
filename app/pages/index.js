'use strict';

function secretQuestion() {
  let resposta = window.prompt('Qual é o seu nome?');
  let confirmacao = window.confirm(`O seu nome realmente é ${resposta}?`);
  if (confirmacao) {
    window.alert(`Seu nome realmente é ${resposta}`);
  } else {
    window.alert(`Seu nome não é ${resposta}`);
  }
}

document.getElementById('secret-button').onclick = function () {
  let tempo = 0;
  let chave = setInterval(function () {
    document.getElementById('contador').innerHTML = `${++tempo}`;
  }, 1000);
  document.getElementById('clone-secret-menu').onclick = function () {
    setTimeout(clearInterval(chave), 500);
  };
};

document.getElementById('secret-button').onload = setTimeout(() => {
  let button = document.getElementById('secret-button');
  button.removeAttribute('disabled');
}, 10000);

function dateCookies() {
  let data = Date();
  document.cookie = data;

  console.log('Acessado em: ' + document.cookie);
  document.querySelector('#readCookie').innerHTML = document.cookie;
  //função bugada, apenas no primeiro carregamento le o dado, após o f5 ele não retorna os dados,
  //mas dando ctrl + f5 e recarregando os cookies ele volta a ler
}

window.onload = function listarAlbums() {
  let albums;
  if (localStorage.getItem('albums') === null) {
    albums = [];
  } else {
    albums = JSON.parse(localStorage.getItem('albums'));
  }

  let html = '';

  albums.forEach(function (element, index) {
    console.log('Element' + element + 'index' + index);
    html += `<div class="col" name="card-html">
                <div class="card h-100">
                    <a href="./app/pages/album-details/album-details.html?${index}">
                    <img src="${element.albumArt}"
                     class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="card-title">${element.albumName}</h5>
                        <p class="card-text">${element.albumArtist}</p>
                        <div>${element.albumRate}</div>
                    </div>
                </div>
            </div>`;
  });

  document.querySelector('#albumsList').innerHTML = html;
  getTotals();
  dateCookies();
};

//JQuery
$('.btn').hover(function (e) {
  $(this).css('background-color', e.type === 'mouseenter' ? 'gray' : 'black');
});

$('main .linha-horizontal').hover(function () {
  $(this).slideUp('slow', function () {});
});

$('main>.linha-horizontal').on('mouseleave', function () {
  $(this).slideToggle(3000, function () {});
});

$('div +p').on('mouseenter', function () {
  $(this).addClass('text-warning');
});

$('div +p').on('mouseleave', function () {
  $(this).removeClass('text-warning');
});

$('.linha-horizontal').next().css('color', 'gray');
$('.content')
  .children()
  .addClass('shadow-lg p-3 mb-5 bg-body-tertiary rounded');

$('#secret-button').on('mouseover', function () {
  $(this).text('NÃO CLIQUE');
});

//
(function () {
  fetch(`https://viacep.com.br/ws/85070200/json/`).then((response) => {
    response.json().then((data) => showData(data));
  });

  const showData = (result) => {
    for (const campo in result) {
      let cidade = result.localidade;
      let uf = result.uf;
      document.querySelector('#state').innerHTML = `${cidade} - ${uf}`;
    }
  };
})();

$.ajax({
  url: 'http://localhost:3000/albums',
  type: 'GET',
  success: function (response) {
    let req = JSON.stringify(response);
    console.log(`os dados da requisição são: ${req}`);
  },
});

function getTotals(){
  console.log('foi');
  let e = document.getElementsByName('card-html');
  //console.log('total: ' + e.length);

  let html = '';
    html += `Bem vindo ao Muty!!<br>Você possui ${e.length} albuns cadastrados`;

  document.querySelector('#total').innerHTML = html;
}

function f(){

}