import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username=""
  Password=""
constructor(private route:Router){}

  log=()=>{
    let log1={"username":this.username,"Password":this.Password}
    console.log(log1)
  
  if(this.username=="admin" && this.Password=="1234") {
    this.route.navigate(["/add"])
    
  } else {
    alert("Invalid Credentials")
  }
}

}
