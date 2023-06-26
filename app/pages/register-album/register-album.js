'use strict';

import { Album } from '../../model/album.js';

let albums = JSON.parse(localStorage.getItem('albums')) || [];

window.onload = function () {
  document.forms[0].onsubmit = cadastrarAlbum;

  let elements = document.getElementsByTagName('input');
  for (let e of elements) {
    console.log('e.value');
    e.addEventListener('focus', focus);

    //if(e.value = "")
    e.addEventListener('blur', blur);
  }

  function focus(event) {
    event.target.style.backgroundColor = 'green';
  }

  function blur(event) {
    event.target.style.backgroundColor = 'red';
  }
};

function cadastrarAlbum(event) {
  event.preventDefault();

  let albumArt = document.getElementById('albumArt').value;
  let albumName = document.getElementById('albumName').value;
  let albumArtist = document.getElementById('albumArtist').value;
  let releaseDate = document.getElementById('releaseDate').value;
  let albumRate = document.getElementById('albumRate').value;
  let albumMusics = document.getElementById('albumMusics').value;

  let newAlbum = new Album(
    albumArt,
    albumName,
    albumArtist,
    releaseDate,
    albumRate,
    albumMusics
  );

  albums.push(newAlbum);

  localStorage.setItem('albums', JSON.stringify(albums));

  // Faz a requisição POST para o JSON Server
  fetch('http://localhost:3000/albums', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newAlbum),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Album cadastrado!', data);
    })
    .catch((error) => {
      console.error('Erro ao cadastrar o album:', error);
    });

  //
  window.location.replace('../../../index.html');
}

//https://media.pitchfork.com/photos/63345315ec0383884068298d/master/w_1280%2Cc_limit/Paramore.jpg
function loadImage() {
  let albumArt = document.getElementById('albumArt').value;
  let image = document.getElementById('image-preview');

  // Definir a URL da imagem no atributo src
  image.src = albumArt;
}

$(document).ready(function () {
  $('#releaseDate').mask('00/00/0000');
});

$('form').parent().addClass('shadow-lg p-3 mb-5 bg-body-tertiary rounded');
