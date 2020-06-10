import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  message: string;
  loans;
  constructor(private application: ApplicationService) { }

  ngOnInit(): void {
    this.getProgramTypes();
  }

  postApplication(form : NgForm){
    this.application.postData(form.value).subscribe(response=>{
      console.log(response);
    });
  }

  makeNewLoan(form : NgForm){
    console.log(form.value);
    let userData=JSON.parse(localStorage.getItem('userData'));
    let email=userData.email;
    this.application.makeLoan(email,form.value).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.message="applications found";
        setTimeout(()=>{
          this.message=null;
        },5000);
      }else{
        this.message="No applications found";
        setTimeout(()=>{
          this.message=null;
        },5000);
      }
    })
    
  }
  getProgramTypes(){
    this.application.getProgramTypes().subscribe(response=>{
      console.log(response);
      this.loans=response;
    })
  }
}
