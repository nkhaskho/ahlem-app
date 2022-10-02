import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endpoint = environment.API_URL + '/products'

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Product[]>(this.endpoint);
  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.endpoint, product);
  }

  updateProduct(product: Product) {
    return this.http.post<Product>(`${this.endpoint}/${product._id}`, product);
  }

  deleteProduct(productId: string) {
    return this.http.delete(`${this.endpoint}/${productId}`);
  }

}
