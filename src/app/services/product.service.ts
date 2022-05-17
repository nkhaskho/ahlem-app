import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCTS: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 16.84,
      image: "product-08.jpg"
    },
    {
      id: 2,
      name: "Product 2",
      price: 16.84,
      image: "product-09.jpg"
    },
    {
      id: 3,
      name: "Product 3",
      price: 16.84,
      image: "product-10.jpg"
    }
  ];

  constructor() { }

}
