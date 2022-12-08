import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  id=""
  booktitle=""
  description=""
  image=""
  author=""

  constructor(private api:ApiService){}
entrys=()=>{
let data={"booktitle":this.booktitle,"description":this.description,"image":this.image,"author":this.author}
console.log(data)
this.api.addbook(data).subscribe(
  (response:any)=>{
    console.log(response)

    if(response.status=="success"){
      alert("Book Added successfully")
      this.booktitle=""
      this.author=""
      this.description=""
      this.image=""
      }else{
        alert("something went wrong")
       }
      }
      )
    }
  }

