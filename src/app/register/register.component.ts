import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{User} from       '../user';
import{User11Service} from  '../user11.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private http:HttpClient,private _User11Service:User11Service){}
methods=['upi','phone-pay','paypal','Paytm'];

  user1=new User("","",0,"","","",0,"","","",true,'pay','','');

  onSubmit() {
  this._User11Service.user11(this.user1)
  .subscribe(
    data=>console.log('Success!!',data),
    data=>console.log('Error!!',data)
  )
    
  }
  

 }
