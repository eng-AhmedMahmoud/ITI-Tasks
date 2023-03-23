import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';
import { AllInOneComponent } from './Components/Day3/all-in-one/all-in-one.component';
import { HomeComponent } from './Components/Day3/ComponentInteraction/home/home.component';
import { LoginComponent } from './Components/Day3/ComponentInteraction/login/login.component';
import { RegisterationComponent } from './Components/Day4/ComponentInteractionLifeCycle/registeration/registeration.component';
// import { StudentsComponent } from './Components/Day4/ComponentInteractionLifeCycle/students/students.component';
import { StudentsComponent } from './Components/Day4/Routing/students/students.component';
import { ValidationReactiveFormsComponent } from './Components/Day4/validation-reactive-forms/validation-reactive-forms.component';
import { StudentDetailsComponent } from './Components/Day4/Routing/student-details/student-details.component';
import { ProfileComponent } from './Components/Day4/Routing/profile/profile.component';
// import { HeaderComponent } from './Components/Day4/Routing/header/header.component';
// import { ErrorComponent } from './Components/Day4/Routing/error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomDirective } from './Directives/custom.directive';
import { CustomPipe } from './Pipes/custom.pipe';
import { UsersComponent } from './Components/Day5/users/users.component';
import { UserDetailsComponent } from './Components/Day5/user-details/user-details.component';
import { HeaderComponent } from './Components/Day5/header/header.component';
import { ErrorComponent } from './Components/Day5/error/error.component';
import {HttpClientModule} from '@angular/common/http'

// let routes:Routes = [
//   {path:"", component:StudentsComponent},
//   {path:"students", component:StudentsComponent},
//   {path:"students/:id", component:StudentDetailsComponent},
//   {path:"profile", component:ProfileComponent},
//   {path:"**", component:ErrorComponent}
// ]
let routes:Routes = [
  {path:"", component:UsersComponent},
  {path:"users", component:UsersComponent},
  {path:"users/:id", component:UserDetailsComponent},
  {path:"**", component:ErrorComponent}
]

//Decorator [MetaData]
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    AllInOneComponent,
    HomeComponent,
    LoginComponent,
    RegisterationComponent,
    StudentsComponent,
    ValidationReactiveFormsComponent,
    StudentDetailsComponent,
    ProfileComponent,
    HeaderComponent,
    ErrorComponent,
    CustomDirective,
    CustomPipe,
    UsersComponent,
    UserDetailsComponent,
    /**
     * 1- Components
     * 2- Pipes
     * 3- Directives
     */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    /**
     * 4- External Module [HttpClientModule - ReactiveFormsModule - FormsModule - ......]
     */
  ],
  providers: [
    /**
     * 5- Services [Handle Http Methods Requests]  http.get(""); http.post("",body)    fetch("asdad",{method:get})
     */
  ],
  bootstrap: [AppComponent/**Parent Component */]
})
export class AppModule { }
