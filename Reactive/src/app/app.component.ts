import { Component } from '@angular/core';
// import {  FormControl, FormGroup } from '@angular/forms';
import { FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive';
constructor(private fb:FormBuilder){}


  //MODEL using formgroup and form control
  // registrationform =new FormGroup({
  //   username:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmpassword:new FormControl(''),

  // })


  //MODEL using formbuilder 
  registrationform=this.fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    password:['',Validators.required],
    confirmpassword:['',Validators.required],

  })


  //api to set value to input parameter
  onsubmit(){
    //or patchvalue
    this.registrationform.setValue({
      username:"sanad",
      password:'123',
      confirmpassword:'123'
    })
  }
}
