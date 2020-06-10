import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  url='http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  postData(application){
    return this.http.post<any>(`${this.url}/add-application`,application);
  }

  makeLoan(email,user){
    return this.http.post<any>(`${this.url}/makeloan/${email}`,user);
  }

  getData(email){
    return this.http.get<any>(`${this.url}/viewapplications/${email}`);
  }

  getApplications(pageNo, itemsPerPage, sortBy){
    if(!sortBy){
      return this.http.get<{content: any[], totalElements: number}>(`${this.url}/${pageNo}/${itemsPerPage}`);
    }else{
      return this.http.get<{content: any[], totalElements: number}>(`${this.url}/${pageNo}/${itemsPerPage}/${sortBy}`);
    }

  }

  updateData(app){
    return this.http.put<any>(`${this.url}`,app);
  }

  getProgramTypes(){
    return this.http.get<any>(`${this.url}/loanprograms`);
  }


}
