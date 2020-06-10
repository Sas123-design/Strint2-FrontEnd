import { Component, OnInit } from '@angular/core';
import { StatusServiceService } from '../status-service.service';
import { UserServiceService } from '../user-service.service';


// export let apply={
//       "loanType":"",
//       "applicantName": "",
//       "age":0,
//       "occupation":"",
//       "salary":"",
//       "loanAmount":0,
//       "panNo":"",
//       "status": ""
// }


@Component({
  selector: 'app-view-requested',
  templateUrl: './view-requested.component.html',
  styleUrls: ['./view-requested.component.css']
})

export class ViewRequestedComponent implements OnInit {

  users;

  failure: string;
  success: string;
  pageNo=0;
  itemsPerPage=2;
  totalItems;
  
  constructor(private service: StatusServiceService, public userService: UserServiceService){ 
    this.getRequested();
  }

  ngOnInit(): void {
  
  }
  getRequested(){
    this.service.getRequested().subscribe(response=>{
      console.log(response);
      this.users=response.data;
    })
  }
  makeRejected(applyLoan){
    this.service.makeStatusRejected(applyLoan).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.getRequested();
        this.failure=response.message;
        setTimeout(()=>{
          this.failure=null;
        },5000);
      }else{
        this.success=response.message;
        setTimeout(()=>{
          this.success=null;
        },5000);
      }
    })
  }
  makeApproved(applyLoan){
    this.service.makeStatusApproved(applyLoan).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.getRequested();
        this.failure=response.message;
        setTimeout(()=>{
          this.failure=null;
        },5000);
      }else{
        this.success=response.message;
        setTimeout(()=>{
          this.success=null;
        },5000);
      }
    })
  }

  getNextPageItem(event){
    console.log(event);
    this.pageNo=event.pageIndex;
    this.itemsPerPage=event.pageSize;
    this.getRequested();
  }
  
  
    

  


}
