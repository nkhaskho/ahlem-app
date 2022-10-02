import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AdsBannerComponent } from './components/ads-banner/ads-banner.component';
import { BlogComponent } from './components/blog/blog.component';
import { InsightsComponent } from './components/dashboard/insights/insights.component';
import { OrdersComponent } from './components/dashboard/orders/orders.component';
import { PromotionsComponent } from './components/dashboard/promotions/promotions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    HomeComponent,
    ShopingCartComponent,
    LoginComponent,
    SignupComponent,
    AdsBannerComponent,
    BlogComponent,
    DashboardComponent,
    InsightsComponent,
    OrdersComponent,
    PromotionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
