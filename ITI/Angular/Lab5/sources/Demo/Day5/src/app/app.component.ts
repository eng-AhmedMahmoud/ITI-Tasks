import { Component } from '@angular/core';
//Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//Logic [ts] [functions]
  title = 'demo';
  name = "Ahmed";
  age:number = 10;
  DataParent = "2na Data Mn El Parent";
  DataFromLogin = "";
  salary = 1000;

  getData(e:any){
    // console.log(e)
    this.DataFromLogin = e;
  }

  //Day4
  // students:{name:string, age:number}[] = [];
  // student:any;
  // getInfo(data:any){
  //   // console.log(data);
  //   // this.students.push(data);
  //   this.student = data;
  // }
}
