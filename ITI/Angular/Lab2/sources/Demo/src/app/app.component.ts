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
}
