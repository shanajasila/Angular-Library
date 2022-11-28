import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  Username=""
  Password=""

  login=()=>{
    let data={
      "Password":this.Password,"Username":this.Username }
      console.log(data)
  }

}
