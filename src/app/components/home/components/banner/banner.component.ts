import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/images/Untitled-6.jpg',
    'assets/images/Untitled-1.jpg',
    'assets/images/Untitled-3.jpg',
  ];

  constructor() {}

  ngOnInit() {
    console.log('ininit');
  }
}
