import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getUsers(){
  	 //return this.http.get('https://jsonplaceholder.typicode.com/users');
  	 let userInfo =  this.http.get('https://jsonplaceholder.typicode.com/users');
  	 //console.log("userInfo=>"+userInfo);
  	 return userInfo;

  }

  getUser(id){
  	 return this.http.get('https://jsonplaceholder.typicode.com/users/'+id);
  }

  getpost(){
  	 return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
