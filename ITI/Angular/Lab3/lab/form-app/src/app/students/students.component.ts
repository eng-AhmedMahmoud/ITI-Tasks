import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  name: string = '';
  age: any;
  @Input() Students: {name:string, age:number}[] = [];
}
