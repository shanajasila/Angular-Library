import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  Username=""
  Password=""
  constructor(private route:Router){}
  login=()=>{
    let data={
      "Password":this.Password,"Username":this.Username }
      console.log(data)

      if(data.Username=="user"&&data.Password=="1234"){
        this.route.navigate(["/add"])
      }
      else{
        alert("Invalid Credentials")
      }
  }

}
