import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) {
    console.log('constructor');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges');
  //   console.log(changes);
  // }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }

  addCart() {
    console.log('added');
    this.cartService.addCart(this.product);
  }
}
