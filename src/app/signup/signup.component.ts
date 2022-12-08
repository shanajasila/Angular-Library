import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name=""
  adhaar=""
  address=""
  pincode=""
  dob=""
  email=""
  phoneno=""
  username=""
  password=""
  confirmpassword=""

  constructor(private api:ApiService){}
  sign=()=>{
    let up={"name":this.name,"adhaar":this.adhaar,"adress":this.address,"pincode":this.pincode,"dob":this.dob,"email":this.email,
  "phoneno":this.phoneno,"username":this.username,"password":this.password,"confirmpassword":this.confirmpassword}
  console.log(up)

  this.api.userregister(up).subscribe(
    (response:any)=>{
      console.log(response)

      if(this.password==this.confirmpassword){
        alert("User Registerd successfully")
        this.name=""
        this.address=""
        this.email=""
        this.phoneno=""
        this.password=""
        this.confirmpassword=""
      }else{
        alert("something went wrong")
      }
    }
  )
  }
}
