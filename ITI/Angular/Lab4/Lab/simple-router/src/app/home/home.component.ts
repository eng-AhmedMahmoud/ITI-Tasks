import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  myForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(20),
      Validators.max(40),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  get name() {
    return this.myForm.get('name')!;
  }
  get age() {
    return this.myForm.get('age')!;
  }
  get email() {
    return this.myForm.get('email')!;
  }

  error: String | null = null;

  onSubmit() {
    if (this.myForm.valid) {
      this.error = null;
      alert('Congratulations, The form is valid!');
    } else {
      this.error = 'The form is invalid!';
    }
  }
}
