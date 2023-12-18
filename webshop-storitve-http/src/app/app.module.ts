import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { MessageService } from './services/message.service';
import { ProductListComponent } from './product/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    CreateProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
],
  providers: [
    ProductService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
