import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  name="";
  age:any;
  // StudentData:{name:string, age:number} = {} as any;

  @Output() sendData = new EventEmitter();

  AddStudent(){
    let newStudent:{name:string, age:number} = {name:this.name, age:this.age};
    if (this.age <= 40 && this.age >= 20 && this.name.length >= 3) {
      // this.StudentData.name = newStudent.name;
      // this.StudentData.age = newStudent.age;
      this.sendData.emit(newStudent);
    }
  };
  
}
