import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/core/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  products$: Observable<Product[]>;
  form: FormGroup;
  id: string;

  constructor(
    private productsService: ProductsService,
    private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$;
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe((product) => {
        this.form.patchValue(product);
      });
    });
    console.log('nadaaaaaa');
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log(this.form.value);
    }
    this.form.reset({});
  }
  buildForm() {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      coment: [''],
    });
  }
}
