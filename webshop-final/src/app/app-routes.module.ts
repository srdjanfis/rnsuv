import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { LogoutComponent } from './user/logout/logout.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products/list', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'products/create', component: CreateProductComponent, canActivate: [AuthGuard]},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/register' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { 
  
}
