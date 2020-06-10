import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class LoanprogramsService {

  url='http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  postData(program){
    return this.http.post<any>(`${this.url}/addloan`,program);
  }

  

  getAllPrograms(){
    return this.http.get(`${this.url}/loan`);  
  }

  getPrograms(pageNo,itemPerPage, sortBy){
    if(!sortBy){
      return this.http.get<{content: any[],totalElements: number}>(`${this.url}/loan/${pageNo}/${itemPerPage}`);
    }else{
      return this.http.get<{content: any[],totalElements: number}>(`${this.url}/loan/${pageNo}/${itemPerPage}/${sortBy}`);
    }
  }

  deleteData(program){
    return this.http.delete<any>(`${this.url}/${program.loanId}`);
  }

  updateData(program){
    return this.http.put<any>(`${this.url}/updateloan`,program)
  }
}
