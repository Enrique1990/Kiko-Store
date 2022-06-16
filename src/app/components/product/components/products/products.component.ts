import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../product.model';
import { ProductsService } from '../../../../core/products/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productos: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(`productos ${id}`);
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((productos) => {
      this.productos = productos;
    });
  }
}
