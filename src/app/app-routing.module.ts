import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './pages/create-student/create-student.component';
import { ListStudentComponent } from './pages/list-student/list-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';

const routes: Routes = [
{path:'',redirectTo:'/create', pathMatch:'full'},
{path:'create', component:CreateStudentComponent},
{path:'list-student',component:ListStudentComponent },
{path:'update-student/:id', component:EditStudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
