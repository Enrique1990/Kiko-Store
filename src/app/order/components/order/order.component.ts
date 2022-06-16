import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { CartService } from '../../../core/services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartPipePipe } from 'src/app/shared/pipes/cart-pipe.pipe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;
  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
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
      address: [''],
      phone: [''],
    });
  }
}
