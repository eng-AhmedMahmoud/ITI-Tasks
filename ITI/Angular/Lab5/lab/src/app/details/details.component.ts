import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(private api: StudentService, private router: ActivatedRoute) {}
  id = this.router.snapshot.params["id"]

  student: any;

  ngOnInit(): void {
    this.api.getStudent(this.id).subscribe({
      next: (data) => {
        this.student = data;
      },
    });
  }
}
