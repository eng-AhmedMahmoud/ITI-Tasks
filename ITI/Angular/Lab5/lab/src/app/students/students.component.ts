import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(private api: StudentService) {}

  students: any;

  ngOnInit(): void {
    this.api.getStudents().subscribe({
      next: (data) => {
        this.students = data;
      },
    });
  }

  deleteStudent(id: number) {
    this.api.deleteStudent(id).subscribe({
      next: (data) => {
        this.students = this.students.filter((student: Student) => {
          return student.id !== id;
        });
      },
    });
  }
}
