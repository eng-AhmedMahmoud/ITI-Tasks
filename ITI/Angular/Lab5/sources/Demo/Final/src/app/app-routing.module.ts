import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewStudentComponent } from './Components/add-new-student/add-new-student.component';
import { ErrorComponent } from './Components/error/error.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { StudentsComponent } from './Components/students/students.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';

const routes: Routes = [
  {path:"",redirectTo:"students", pathMatch:"full"},
  {path:"students",component:StudentsComponent},
  {path:"students/:id",component:StudentDetailsComponent},
  {path:"add",component:AddNewStudentComponent},
  {path:"update/:id",component:UpdateStudentComponent},
  {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
