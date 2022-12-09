import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent {
  name=""
  booktitle=""
  dateOfIssue=""
  membershipNo=""

  constructor(private api:ApiService){}
  readValues=()=>{
    let data={"name":this.name,"booktitle":this.booktitle,"dateOfIssue":this.dateOfIssue,"membershipNo":this.membershipNo}
    console.log(data)

    this.api.issuebook(data).subscribe(
      (response:any)=>{
        console.log(response)
    
        if(response.status=="success"){
          alert("Isuue successfully")
          this.booktitle=""
          this.name=""
          this.dateOfIssue=""
          this.membershipNo=""
          }else{
            alert("something went wrong")
           }
          }
          )
  }
}
