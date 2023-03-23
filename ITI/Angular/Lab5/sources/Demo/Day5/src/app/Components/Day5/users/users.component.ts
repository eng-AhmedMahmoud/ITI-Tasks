import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomService } from 'src/app/Services/custom.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit, OnDestroy {
  //inject at ctor
  constructor(private myService:CustomService){

  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }
  Users:any;
  ngOnInit(): void {//Fetch API
    //throw new Error('Method not implemented.');
    // console.log(this.myService.GetAllUsers())
    // this.myService.GetAllUsers().subscribe(
    //   (data)=>{console.log(data)}
    //   ,(err)=>{console.log(err)}
    // )
    this.myService.GetAllUsers().subscribe({
      next:(data)=>{
        //console.log(data)
        this.Users = data;
      },
      error:(err)=>{console.log(err)}
    })
  }

}
