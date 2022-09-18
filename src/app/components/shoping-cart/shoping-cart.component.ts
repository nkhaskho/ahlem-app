import { Product } from 'src/app/models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {

  cart: Product[] = [];
  total = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    let products = this.productService.PRODUCTS;
    for (let i = 0; i < products.length; i++) {
      products[i].quantity = 1;
      this.total += products[i].price
      this.cart.push(products[i])
      
    }
  }

}
