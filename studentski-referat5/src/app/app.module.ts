import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentItemComponent } from './student/student-item/student-item.component';
import { FormsModule } from '@angular/forms';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { studentInterceptor } from './services/student.interceptor';
import { StudentService } from './services/student.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProgramListComponent } from './program/program-list/program-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentItemComponent,
    CreateStudentComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProgramListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StudentService,
    provideHttpClient(withInterceptors([studentInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
