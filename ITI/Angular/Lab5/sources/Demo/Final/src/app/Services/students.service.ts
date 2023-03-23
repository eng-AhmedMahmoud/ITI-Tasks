import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private readonly myClient:HttpClient) { }
  //DB_URL
  private readonly DB_URL = "http://localhost:3000/Students";
  //METHODS
  GetAllStudents(){
    return this.myClient.get(this.DB_URL);
  }
  GetStudentByID(id:any){
    return this.myClient.get(this.DB_URL+"/"+id);
  }
  AddNewStudent(newStudent:any){
    return this.myClient.post(this.DB_URL,newStudent);
  }
  UpdateStudentByID(id:any, updatedStudent:any){
    return this.myClient.put(this.DB_URL+"/"+id, updatedStudent);
  }
  DeleteStudentByID(id:any){
    return this.myClient.delete(this.DB_URL+"/"+id);
  }
}
