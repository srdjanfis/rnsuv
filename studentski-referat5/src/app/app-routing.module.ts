import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { StudentItemComponent } from './student/student-item/student-item.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { authGuard } from './guards/auth.guard';
import { ProgramListComponent } from './program/program-list/program-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'students/list', component: StudentItemComponent, canActivate: [authGuard] },
  { path: 'students/create', component: CreateStudentComponent, canActivate: [authGuard] },
  { path: 'programs', component: ProgramListComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
