import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-reactive-forms',
  templateUrl: './validation-reactive-forms.component.html',
  styles: [
  ]
})
export class ValidationReactiveFormsComponent {

  myRegFormValid = new FormGroup({
    name: new FormControl(null,Validators.required),
    age: new FormControl(null,[Validators.min(20), Validators.max(40)])
  })


  get NameValid(){
    return this.myRegFormValid.controls["name"].value && this.myRegFormValid.controls["name"].valid;
  }

  get AgeValid(){
    return this.myRegFormValid.controls["age"].value && this.myRegFormValid.controls["age"].valid;
  }

  getData(){
    if(this.NameValid && this.AgeValid){
      //
    }
    // console.log(this.myRegFormValid);
    // console.log("Status: ",this.myRegFormValid.status);
    // console.log("Valid: ",this.myRegFormValid.valid);
    // console.log("Value: ",this.myRegFormValid.value);
    console.log(
                  "Name: "
                  ,this.myRegFormValid.controls["name"].value
                  ,this.myRegFormValid.controls["name"].valid
               );
    console.log(
                  "Age: "
                  ,this.myRegFormValid.controls["age"].value
                  ,this.myRegFormValid.controls["age"].valid
                );
  }
}
