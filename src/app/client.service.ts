import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url="http://localhost:8080/api";
  constructor(private http: HttpClient) { }

  postData(client){
    return this.http.post<any>(`${this.url}/addclient`,client);
  }

  getData(){
    return this.http.get<any>(`${this.url}/getclient`);
  }

  getAllClients(pageNo,itemsPerPage, sortBy){
    if(!sortBy){
      return this.http.get<{content: any[], totalElements: number}>(`${this.url}/getclient/${pageNo}/${itemsPerPage}`);
    }else{
      return this.http.get<{content: any[], totalElements: number}>(`${this.url}/getclient/${pageNo}/${itemsPerPage}/${sortBy}`);
    }
  }
  
  deleteData(client){
    return this.http.delete<any>(`${this.url}/deleteclient/${client.email}`);
  }

  updateData(client){
    return this.http.put<any>(`${this.url}/updateclient`,client);
  }
}
