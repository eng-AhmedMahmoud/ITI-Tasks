import { Component } from '@angular/core';
//Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//Logic [ts] [functions]
  title = 'demo';
  name = "AHmed";
  age:number = 10;
  DataParent = "2na Data Mn El Parent";
  DataFromLogin = "";

  getData(e:any){
    // console.log(e)
    this.DataFromLogin = e;
  }
}
