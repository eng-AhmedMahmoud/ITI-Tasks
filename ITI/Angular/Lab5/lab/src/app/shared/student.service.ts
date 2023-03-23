import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiURL = 'http://localhost:3000/students';
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get(this.apiURL);
  }

  getStudent(id: number) {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createStudent(student: Student) {
    return this.http.post(this.apiURL, student);
  }

  updateStudent(student: Student) {
    console.log(student);
    return this.http.put(`${this.apiURL}/${student.id}`, student);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
