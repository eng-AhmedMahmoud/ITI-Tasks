import {Component} from '@angular/core'
@Component({
  selector:"app-first",
  templateUrl:"./first.component.html",
  styleUrls:["./first.component.css"]
})
export class FirstComponent{
  name = "Ahmed";
  srcImage = "assets/Images/2.jpg";
  fName = "";
  lName = "";

  chg(){
    this.name = "Aly";
    this.srcImage = "assets/Images/3.jpg"
  }
  mousOver(){
    this.srcImage = "assets/Images/2.jpg";
  }

  getFName(e:any){
    // console.log(e.target.value);
    this.fName = e.target.value;
  }
}
