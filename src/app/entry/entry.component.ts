import { Component } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  title=""
  description=""
  image=""
  Author=""
entrys=()=>{
let data={"title":this.title,"description":this.description,"image":this.image,"Author":this.Author}
console.log(data)
  }
}
