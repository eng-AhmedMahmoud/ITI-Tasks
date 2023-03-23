import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  constructor(private router: ActivatedRoute, private api: StudentService) {}
  id = this.router.snapshot.params['id'];

  student: any = {
    id: 1,
    name: 'John',
    email: 'dwa',
    age: '123',
  };

  ngOnInit(): void {
    this.api.getStudent(this.id).subscribe({
      next: (data) => {
        this.student = data;
      },
    });
  }

  updateStudent() {
    this.api.updateStudent(this.student).subscribe({
      next: (data) => {
        alert("student updated successfully")
      },
    });
  }
}
