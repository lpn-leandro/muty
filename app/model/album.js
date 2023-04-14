'use strict';
export class Album{
    constructor(id, albumName, albumArtist, albumRate, musics = [] ){
        this.id = id;
        this.albumName = albumName;
        this.albumArtist = albumArtist;
        this.albumRate = albumRate;
        this.musics = musics;
    }

    addMusic(music) {
        this.musics.push(music);
    }
}