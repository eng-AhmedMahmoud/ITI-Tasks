import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  DataLogin = "2na Data Mn El Login";
  // constructor(){
  //   setTimeout(()=>{
  //     this.myEvent.emit(this.DataLogin);
  //   },3000)
  // }

  //1-Create Event
  @Output() myEvent = new EventEmitter();
  //2-Emit ???? [Fire]
  //3-Data [Pass]


  fireNow(){
    this.myEvent.emit(this.DataLogin);
  }
}
