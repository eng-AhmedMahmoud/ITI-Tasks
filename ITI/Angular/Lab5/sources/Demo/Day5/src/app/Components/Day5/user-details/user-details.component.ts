import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomService } from 'src/app/Services/custom.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
  ID:any;
  User:any;//undefined ==> undefined.name ==> Error
  constructor(myActivated:ActivatedRoute, private myService:CustomService){// ActivatedRoute==>ID && Import Service
      this.ID = myActivated.snapshot.params["id"];
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.myService.GetUserByID(this.ID).subscribe({
      next:(data)=>{
        //console.log(data);
        // this.User = Object.values(data);//[val]
        this.User = data;//
      },
      error:(err)=>{console.log(err)}
    })
  }


}
