import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // productos: Product=[1, 'assets/images/camiseta.png', 'camiseta',80000, 'bla bla bla' ]

  ngOnInit() {
    console.log('oninit');
  }
}
