import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../../core/products/products.service';
import { Product } from '../../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  producto: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }
  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      this.producto = product;
    });
  }
  createProduct() {
    const newProduct: Product = {
      id: this.producto.id,
      title: this.producto.title,
      image: this.producto.image,
      //   'http://www.hillapparel.net/wp-content/uploads/2017/01/M-Pullover-Salmon.jpg',
      price: this.producto.price,
      description: this.producto.description,
    };

    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: this.producto.price,
      description: this.producto.description,
    };
    this.productsService
      .updateProduct('2', updateProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('222').subscribe((product) => {
      console.log(product);
    });
  }
}
