import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private http:HttpClient){}
  methods=['upi','phone-pay','paypal','Paytm'];

  user1=new User("","",0,"","","",0,"","","",true,'pay','','');

  onSubmit() {
  }

 }
