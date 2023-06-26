'use strict';
export class Album {
  constructor(
    albumArt,
    albumName,
    albumArtist,
    releaseDate,
    albumRate,
    albumMusics
  ) {
    this.albumArt = albumArt;
    this.albumName = albumName;
    this.albumArtist = albumArtist;
    this.releaseDate = releaseDate;
    this.albumRate = albumRate;
    this.albumMusics = albumMusics;
  }
}
