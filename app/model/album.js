'use strict';
export class Album{
    constructor(id, albumName, albumArtist, musics = [], ){
        this.id = id;
        this.albumName = albumName;
        this.albumArtist = albumArtist;
        this.musics = musics;
    }

    addMusic(music) {
        this.musics.push(music);
    }
}