import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styles: [
  ]
})
export class RegisterationComponent {

  @Output() myEvent = new EventEmitter();
  // name = "";
  // age:any;

  addStudent(n:any, a:any){
    // let newStudent = {name:this.name, age: this.age};
    // console.log(newStudent);
    // this.myEvent.emit(newStudent)
    let newStudent = {name:n, age: +a};
    console.log(newStudent);
    this.myEvent.emit(newStudent);
  }
}
