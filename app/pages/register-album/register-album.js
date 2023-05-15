"use strict";
import { Album } from "../../model/album.js";

let albums = JSON.parse(localStorage.getItem("albums")) || [];

window.onload = function () {
  document.forms[0].onsubmit = cadastrarAlbum;

  let elements = document.getElementsByTagName("input")
  for (let e of elements) {
    console.log("for1");
    e.addEventListener("focus", focus);
  }

  function focus(event) {
    event.target.style.backgroundColor = "green";
  }

}

function cadastrarAlbum(event) {
  event.preventDefault();

  let albumArt = document.getElementById("albumArt").value;
  let albumName = document.getElementById("albumName").value;
  let albumArtist = document.getElementById("albumArtist").value;
  let albumRate = document.getElementById("albumRate").value;
  let albumMusics = document.getElementById("albumMusics").value;

  let newAlbum = new Album(albumArt, albumName, albumArtist, albumRate, albumMusics);

  albums.push(newAlbum);

  localStorage.setItem("albums", JSON.stringify(albums));
  window.location.replace("../../../index.html");
}