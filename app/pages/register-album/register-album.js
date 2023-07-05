'use strict';

import { Album } from '../../model/album.js';

let albums = JSON.parse(localStorage.getItem('albums')) || [];

window.onload = function () {
  changeInputColor();

  $('#albumRate').on('blur', function (event) {
    //imprimindo uma propriedade de event
    console.log(event.currentTarget);
    if (this.validity.rangeOverflow || !fieldValidate('albumRate')) {
      this.setCustomValidity('O valor deve ser entre 0 e 100.');
      console.log('O valor deve ser entre 0 e 100.');
    }
  });

  a();
};

function changeInputColor() {
  document.forms[0].onsubmit = cadastrarAlbum;

  let elements = document.getElementsByTagName('input');
  for (let e of elements) {
    e.addEventListener('focus', focus);
    e.addEventListener('blur', blur);
  }

  function focus(event) {
    event.target.style.borderColor = 'green';
  }

  function blur(event) {
    event.target.style.borderColor = 'red';
  }
}

function cadastrarAlbum(event) {
  event.preventDefault();

  let albumArt = document.getElementById('albumArt').value.trim();
  let albumName = document.getElementById('albumName').value.toLowerCase();
  let albumArtist = document.getElementById('albumArtist').value.toUpperCase();
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
albumArt.onchange = function () {
  let albumArt = document.getElementById('albumArt').value;

  let html = '';
  html += `<img id="image-preview"
    src="${albumArt}"
    class="object-fit-cover border rounded" alt="..." style="height: 20em;" >`;

  return (document.querySelector('#image-p').innerHTML = html);
};

$(document).ready(function () {
  $('#releaseDate').mask('00/00/0000');
});

$('form').parent().addClass('shadow-lg p-3 mb-5 bg-body-tertiary rounded');

function fieldValidate(id) {
  let valor = document.getElementById(id).value;
  if (valor == null || valor == '') {
    return false;
  }
  return true;
}

function a() {
  console.log('foi');
  let e = document.getElementById('albumName');
  console.log('teste ' + e);
  e.classList.add('input-font');
}

document.addEventListener('keypress', function (e) {
  if (e.charCode === 108) 
    console.log('oi');
  
});