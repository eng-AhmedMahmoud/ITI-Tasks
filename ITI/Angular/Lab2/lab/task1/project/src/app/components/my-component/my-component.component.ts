import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  Name = "";
  lName = "";
  chg = (e:any) => {
    this.Name = e.target.value;
  }
}
