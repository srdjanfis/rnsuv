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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ProductAppInterceptor } from './services/product-app.interceptor';
import { UserStoreService } from './services/user-store.service';
import { UserService } from './services/user.service';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AppRoutesModule } from './app-routes.module';
import { LogoutComponent } from './user/logout/logout.component';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    CreateProductComponent,
    ProductListComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutesModule
],
  providers: [
    ProductService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProductAppInterceptor,
      multi: true,
    },
    UserStoreService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
