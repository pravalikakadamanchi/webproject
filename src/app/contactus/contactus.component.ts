import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  user:string;
  password:string;
  mail :string;
  call:number;
  name:string;
  email:string;
  

  constructor() { }

  ngOnInit() {
  
  }
  LoginUser()
  
  {
    if(this.user == "Admin" && this.password == "admin123"&& this.email =="email" )
    {
      console.log('Welcome to our channel');
    }
  }
  

}
