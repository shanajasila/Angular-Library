import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchBook=()=>{
    return this.http.get("http://localhost:8080/viewbook")
  }
  addbook=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/addbook",dataTosend)
  }
  searchbook=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/searchbook",dataTosend)
  }
  userregister=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/signup",dataTosend)
  }
  userlogin=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/signin",dataTosend)
  }
  deleteBook=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/delete",dataTosend)
  }
}
