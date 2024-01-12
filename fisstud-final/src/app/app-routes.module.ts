import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { StudCardComponent } from './student/stud-card/stud-card.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { authGuardGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'students/list', component: StudCardComponent, canActivate: [authGuardGuard] },
  { path: 'students/create', component: CreateStudentComponent, canActivate: [authGuardGuard] },
  { path: '**', redirectTo: '/login' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutesModule { }
