import { Component } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styles: [
  ]
})
export class AddNewStudentComponent {

  constructor(private myService:StudentsService){}

  AddStudnet(n:any, a:any, e:any){
    let newStudent = {name:n, age:a, email:e};
    //Server ?? ==> inject Service ==> AddNewStudent(body)
    this.myService.AddNewStudent(newStudent).subscribe();
  }
}
