import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0,
    slidesPerview: 1,
    centeredSlider: true,
    speed: 400,
    autoplay: { delay: 2500,
    disableOnInteraction: false}
  };

  slides = [
    {
      image: 'assets/logo/logo.png',
      imageAlt: 'platzilOGO',
      title: 'Escucha tu musica',
      subtitle: 'En cualquier lugar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque illo necessitatibus hic cum et sunt impedit molestias. Ad, aut! Dicta, placeat natus. A, commodi fugiat. Dignissimos nam aliquid doloribus odit!',
      icon: 'play'

    },
    {
      image: 'assets/logo/logo.png',
      imageAlt: 'platzilOGO',
      title: 'Disfruta de nuestro reproductor',
      subtitle: 'En el modo video',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque illo necessitatibus hic cum et sunt impedit molestias. Ad, aut! Dicta, placeat natus. A, commodi fugiat. Dignissimos nam aliquid doloribus odit!',
      icon: 'play'
    },
    {
      image: 'assets/logo/logo.png',
      imageAlt: 'platzilOGO',
      title: 'Accede al exclusivo',
      subtitle: 'Modo deporte',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque illo necessitatibus hic cum et sunt impedit molestias. Ad, aut! Dicta, placeat natus. A, commodi fugiat. Dignissimos nam aliquid doloribus odit!',
      icon: 'play'
    }
  ];
  constructor(
    private route: Router,
    private storage: Storage
  ) { }

  finish(): void{
    this.storage.set('isIntroShowed', true );
    this.route.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
