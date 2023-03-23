import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor(private readonly myClient: HttpClient) { }
  private readonly DB_URL = "https://jsonplaceholder.typicode.com/users";

  GetAllUsers(){
    return this.myClient.get(this.DB_URL);
  }
  GetUserByID(id:any){
    return this.myClient.get(this.DB_URL+"/"+id);
  }
  // AddNewUser(){
  //   return
  // }

}
