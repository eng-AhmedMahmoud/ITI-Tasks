import { Component } from '@angular/core';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styleUrls: ['./all-in-one.component.css']
})
export class AllInOneComponent {
  name="";
  age:any;
  Students:{name:string, age:number}[]=[];
  AddStudent(){
    let newStudent:{name:string, age:number} = {name:this.name, age:this.age};
    if(this.age<=30 && this.name.length >= 3)
      this.Students.push(newStudent);
    // console.log(this.Students);
  }
}
