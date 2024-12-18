import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentItemComponent } from './student/student-item/student-item.component';
import { StudentService } from './services/student.service';
import { FormsModule } from '@angular/forms';
import { CreateStudentComponent } from './student/create-student/create-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentItemComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
