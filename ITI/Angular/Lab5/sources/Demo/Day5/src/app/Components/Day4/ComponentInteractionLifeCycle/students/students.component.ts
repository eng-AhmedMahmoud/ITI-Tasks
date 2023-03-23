import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnChanges{

  // @Input() studentsArr:{name:string, age:number}[] = [];
  @Input() studentElem:any;//undefined
  @Input() name:any;//undefined
  //Array ==> push
  studentsArr:{name:string, age:number}[] = [];

  //XXXXXX this.studentsArr.push(this.studentElem);
//When To Get Data At Fire Or Click at ADD Button
//When Input get Data??? ==> Push Array
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  // console.log("Current Value: ",changes['studentElem'].currentValue);
  // console.log("studentElem: ",this.studentElem);//
  // console.log("First Change: ",changes['studentElem'].firstChange);
  //Push Array [First Time] ==> undefined

  // if(changes['studentElem'].currentValue)
  // if(this.studentElem)
  if(!changes['studentElem'].firstChange)
    this.studentsArr.push(this.studentElem);


}
}
