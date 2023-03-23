import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { StudentsComponent } from './students/students.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'students/:id', component: DetailsComponent },
  { path: 'students/update/:id', component: UpdateComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
