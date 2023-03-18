import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
regData:{name:string, age:number}[] = [];

getStudentData(e:any){
  this.regData.push(e);
}

}
