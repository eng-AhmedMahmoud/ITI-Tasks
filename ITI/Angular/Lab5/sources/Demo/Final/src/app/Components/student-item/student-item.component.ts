import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styles: [
  ]
})
export class StudentItemComponent {
  @Input() student:any;
}
