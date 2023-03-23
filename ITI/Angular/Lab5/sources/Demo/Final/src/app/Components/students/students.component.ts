import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit {
  constructor(private myService:StudentsService){}
  Students:any;
  ngOnInit(): void {
    this.myService.GetAllStudents().subscribe({
      next:(data)=>{
        //console.log(data)
        this.Students = data;
      },
      error:(err)=>{console.log(err)}
    })
  }
}
