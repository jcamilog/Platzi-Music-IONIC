import { Component } from '@angular/core';
import { PlatziMusicService } from './../services/platzi-music.service';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';

import { SongsModalPage } from '../songs-modal/songs-modal.page'
import { AnyTxtRecord } from 'dns';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOps = {
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    grabCursor: true,
    spaceBetween: 30,
    speed: 400,
  };
  artists: any [] = [];
  songs: any[] = [];
  albums: any[] = [];
  song = {};
  currentSong = {};
  newTime;
  constructor(
    private platziMusicService: PlatziMusicService,
    private modalController: ModalController
  ) {}
    ionViewDidEnter(){
      this.platziMusicService.getNewReleases()
      .then((newReleases) => {
        this.artists = this.platziMusicService.getArtist();
        console.log(this.artists);
        this.songs = newReleases.albums.items
        .filter(e => e.album_type === 'single');
        this.albums = newReleases.albums.items
        .filter(e => e.album_type === 'album');
      });
    }
    async showSongs(artist){
      const songs = await this.platziMusicService.getArtistTopTracks(artist.id);
      const  modal = await this.modalController.create({
        component: SongsModalPage,
        componentProps: {
          songs: songs.tracks,
          artist: artist.name
        }
      });
      modal.onDidDismiss()
      .then(dataReturn => {
        this.song = dataReturn.data;
      });

      modal.present();
    }

    play(){
      this.currentSong = new Audio(this.song.preview_url);
      console.log(this.song);
      this.currentSong.play();
      this.currentSong.addEventListener('timeUpdate', () => {
        this.newTime = ( 1 / this.currentSong.duration ) * this.currentSong.currentTime;
      });
      this.song.playing = true;
    }
    pause(){
      this.currentSong.pause();
      this.song.playing = false;
    }
    parseTime(time= '01.00'){
      if (time){
        const partTime = parseInt(time.toString().split('.')[0], 10);
        let minutes = Math.floor(partTime / 60).toString();
        if (minutes.length === 1) {
          minutes = '0' + minutes;
        }
        let seconds = (partTime % 60).toString();
        if (seconds.length === 1) {
          seconds = '0' + seconds;
        }
        return minutes + ':' + seconds;
      }
    }
}
