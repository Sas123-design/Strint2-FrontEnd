import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url='http://localhost:8080/api';
  constructor(private http: HttpClient, private router: Router) { }

  postData(user){
    return this.http.post<any>(`${this.url}/adduser`,user);
  }

  getData(){
    return this.http.get<any>(`${this.url}/getuser`);
  }

  deleteData(user){
    return this.http.delete<any>(`${this.url}/getuser/${user.id}`);
  }

  login(credentials){
    return this.http.post<any>(`${this.url}/login`,credentials);
  }

  isUser(): boolean{
    const userData=JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.role==='ROLE_CUSTOMER'){
      return true;
    }else{
      return false;
    }
  }

  isLad() : boolean{
    const userData=JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.role==='ROLE_LAD'){
      return true;
    }else{
      return false;
    }
  }

  isAdmin(): boolean{
    const userData=JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.role==='ROLE_ADMIN'){
      return true;
    }else{
      return false;
    }
  }

  isLogged(): boolean{
    const userData=JSON.parse(localStorage.getItem('userData'));
    if(userData){
      return true;
    }else{
      return false;
    }
  }

  logout(){
     localStorage.clear();
     this.router.navigateByUrl('/login');
  }
}
