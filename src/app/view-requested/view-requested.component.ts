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


  constructor(private service: StatusServiceService, public userService: UserServiceService) {
    this.getRequestedApplication();
  }

  getRequestedApplication(){
    this.service.getRequested().subscribe(response=>{
      console.log(response);
      this.users=response.data;
    })
  }

  makeApproved(applyLoan){
    this.service.makeStatusApproved(applyLoan).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.getRequestedApplication();
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
    });
  }

  makeRejected(applyLoan){
    this.service.makeStatusRejected(applyLoan).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.getRequestedApplication();
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
  ngOnInit(): void {
  }
}
