import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './user/login/login';
import { Register } from './user/register/register';
import { StockList } from './stock/stock-list/stock-list';
import { CreateStock } from './stock/create-stock/create-stock';
import { authGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'stocks/list', component: StockList, canActivate: [authGuard] },
  { path: 'stocks/create', component: CreateStock, canActivate: [authGuard] },
  { path: '**', redirectTo: '/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
