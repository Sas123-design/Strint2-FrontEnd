import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewRequestedComponent} from './view-requested/view-requested.component';
@Injectable({
  providedIn: 'root'
})
export class StatusServiceService {

  url="http://localhost:8080/api"
  constructor(private http: HttpClient) { }

  getApproved(){
    return this.http.get<any>(`${this.url}/approved`);
  }

  getRejected(){
    return this.http.get<any>(`${this.url}/rejected`);
  }

  getRequested(){
    return this.http.get<any>(`${this.url}/requested`);
  }

  makeStatusApproved(applyLoan){
    return this.http.put<any>(`${this.url}/makeapproved/${applyLoan.loanId}`,applyLoan);
  }

  makeStatusRejected(applyLoan){
    return this.http.put<any>(`${this.url}/makerejected/${applyLoan.loanId}`,applyLoan);
  }

  getRejectedPage(pageNo, itemsPerPage){
    return this.http.get<{content: any[], totalElements: number}>(`${this.url}/getRejected/${pageNo}/${itemsPerPage}`);
  }


  getRequestedPage(pageNo,itemsPerPage){
    return this.http.get<{content: any[], totalElements: number}>(`${this.url}/getRequested/${pageNo}/${itemsPerPage}`)
  }

  getApprovedPage(pageNo, itemsPerPage){
    return this.http.get<{content: any[], totalElements: number}>(`${this.url}/getApproved/${pageNo}/${itemsPerPage}`);
  }

}
