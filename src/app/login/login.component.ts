import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username=""
  Password=""
  log=()=>{
    let log1={"username":this.username,"Password":this.Password}
    console.log(log1)
  
  if(this.username=="admin" && this.Password=="1234") {
    alert("valid login")
    
  } else {
    alert("Invalid Credentials")
  }
}

}
