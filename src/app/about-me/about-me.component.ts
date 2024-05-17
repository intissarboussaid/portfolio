import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  viewportHeight: number | undefined;

  images = [
    {path: '../../assets/img/angular.jpg'},
    {path: '../../assets/img/html.jpg'},
    {path: '../../assets/img/css.png'},
    {path: '../../assets/img/typscript.png'},
    {path: '../../assets/img/spring boot.jpg'},
    {path: '../../assets/img/react.png'},
    {path: '../../assets/img/postgresql.png'},
    {path: '../../assets/img/java.jpg'},
    {path: '../../assets/img/js.png'},
    {path: '../../assets/img/node js.jpg'},
];   

imagesForSlider = [
  {path: '../../assets/img/angular.jpg'},
  {path: '../../assets/img/html.jpg'},
  {path: '../../assets/img/css.png'},
  {path: '../../assets/img/typscript.png'},
  {path: '../../assets/img/spring boot.jpg'},
  {path: '../../assets/img/react.png'},
  {path: '../../assets/img/postgresql.png'},
  {path: '../../assets/img/java.jpg'},
  {path: '../../assets/img/js.png'},
  {path: '../../assets/img/node js.jpg'}
];

slides = [
  {
    src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp',
    img: 'https://mdbootstrap.com/img/Photos/Slides/1.webp',
    alt: 'Table Full of Spices',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp',
    img: 'https://mdbootstrap.com/img/Photos/Slides/2.webp',
    alt: 'Winter Landscape',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp',
    img: 'https://mdbootstrap.com/img/Photos/Slides/3.webp',
    alt: 'View of the City in the Mountains',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp',
    img: 'https://mdbootstrap.com/img/Photos/Slides/4.webp',
    alt: 'Place Royale Bruxelles',
  },
];

  constructor() { }

  title = 'ng-carousel-demo';
  ngOnInit(): void {
    this.viewportHeight = window.innerHeight;
    this.images;
    this.imagesForSlider;
  }
 

}
