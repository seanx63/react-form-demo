import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'react-forms';
  loginform = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required)
  })
  loginuser() {
    console.log(this.loginform.value)
  }
  get name() {
    return this.loginform.get('name');
  }
  get email() {
    return this.loginform.get('email');
  }
  get age() {
    return this.loginform.get('age');
  }
  get mobile() {
    return this.loginform.get('mobile');
  }
  send() {
    alert('Sent!')
  }
}
