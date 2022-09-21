import { BlogService } from 'src/app/services/blog.service';
import { Blog } from './../../models/blog';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  blogs: Blog[] = [];

  constructor(private productService: ProductService,
              private blogService: BlogService) { }

  ngOnInit(): void {
    this.products = this.productService.PRODUCTS;
    this.blogs = this.blogService.BLOGS;
  }

}
