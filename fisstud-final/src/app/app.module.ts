import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudCardComponent } from './student/stud-card/stud-card.component';
import { CommonModule } from '@angular/common';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { StudentServiceService } from './services/student-service.service';
import { StudAppInterceptor } from './services/stud-app.interceptor';
import { AppRoutesModule } from './app-routes.module';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { authGuardGuard } from './guards/auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    StudCardComponent,
    CreateStudentComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [
    AuthService,
    StudentServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StudAppInterceptor,
      multi: true
    },
    authGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
