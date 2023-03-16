import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './pages/create-student/create-student.component';
import { ListStudentComponent } from './pages/list-student/list-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    ListStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
