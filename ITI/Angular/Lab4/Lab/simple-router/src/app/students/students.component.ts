import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: { name: string, age: number, address: number }[] = [
    { name: 'John', age: 20, address: 123 },
    { name: 'Mary', age: 21, address: 456 },
    { name: 'Peter', age: 22, address: 789 },
  ]
}
