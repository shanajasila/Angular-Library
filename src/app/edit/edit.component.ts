import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  title=""
  edit=()=>{
    let edit={"title":this.title}
    console.log(edit)
  }

}
