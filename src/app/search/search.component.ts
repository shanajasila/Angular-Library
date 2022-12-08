import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  booktitle=""
  searchData:any=[]
  constructor(private api:ApiService,private route:Router){
    this.api.fetchBook().subscribe(
      (response:any)=>{
        this.searchData=response
      }
    )
  }
  readvalue=()=>{
    let data={"booktitle" :this.booktitle}
    console.log(data)
    this.api.searchbook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("Invalid Book Title")
        }
        else{
          this.searchData=response
        }
      }
    )
  }

  id=""
  deleteClick=(id:any)=>{

    let data:any={"id":id}
    console.log(data)
    this.api.deleteBook(data).subscribe(
      (response:any)=>{
        console.log(response)

        if(response.status="success"){
          alert("Book deleted Successfully")
          this.searchData=[]
          this.booktitle
          this.route.navigate(['/search'])
          
        }
        else{
          alert("Invalid employee code")
          this.booktitle
        }
      }
    )
  }

}
