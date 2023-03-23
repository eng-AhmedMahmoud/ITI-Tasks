import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent {
  ID=0;
  //First Cycle Works [Constructor]
  constructor(myActivatedRoute:ActivatedRoute){
    // console.log(myActivatedRoute.snapshot.params["id"]);
    this.ID = myActivatedRoute.snapshot.params["id"];
  }

}
