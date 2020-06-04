import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoanprogramsService } from '../loanprograms.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
 
interface Applications{
  // applicantname : string,
  // loantype : string,
  // age : 45,
  // phone : string,
  // bankid : string,
  // email : string,
  // occupation : string,
  // salary : 450000.0,
  // PAN : string,
  // address : string,
  // password : string,
  // loanid : string,
  // status : string
}
@Component({
  selector: 'app-loanprograms',
  templateUrl: './loanprograms.component.html',
  styleUrls: ['./loanprograms.component.css']
})
export class LoanprogramsComponent implements OnInit {
  programs;
  pageNo=0;
  itemPerPage=2;
  totlaItems;
  fieldName;
  searchValue;
  message: string;
  constructor(private loanprogramService: LoanprogramsService,public service: UserServiceService,
              private router: Router) {}
  
  ngOnInit(): void {
    this.loanprogramService.getPrograms(this.pageNo,this.itemPerPage,null).subscribe(data=>{
      console.log(data);
      this.programs=data.content;
      this.totlaItems=data.totalElements;
    });
    
  }

  getPrograms(filedName){
    this.loanprogramService.getPrograms(this.pageNo,this.itemPerPage,filedName).subscribe(data=>{
      console.log(data);
      this.programs=data.content;
      this.totlaItems=data.totalElements;
    });
  }

  getNextPageItems(event){
    console.log(event);
    this.pageNo=event.pageIndex;
    this.itemPerPage=event.pageSize;
    this.getPrograms(null); 
  }
  
  getSortedData(){
    console.log(this.fieldName);
    this.getPrograms(this.fieldName);
  }

  deleteProgram(program){
    this.loanprogramService.deleteData(program).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.getPrograms(this.fieldName);
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        }, 5000)
      }
    });
  }

  selectProgram(program){
    this.router.navigate(['/edit-loanprogram'], {queryParams: program});
  }
}
