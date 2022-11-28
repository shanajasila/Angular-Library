import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name=""
  adhaarNumber=""
  adress=""
  Pincode=""
  dob=""
  email=""
  PhoneNumber=""
  username=""
  Password=""
  confirmPassword=""
  sign=()=>{
    let up={"name":this.name,"adhaarNumber":this.adhaarNumber,"adress":this.adress,"Pincode":this.Pincode,"dob":this.dob,"email":this.email,
  "phoneNumber":this.PhoneNumber,"username":this.username,"Password":this.Password,"confirmPassword":this.confirmPassword}
  console.log(up)
  }
}
