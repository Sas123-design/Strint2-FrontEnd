import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

export let apply={
  "fullName":"",
  "password": "",
  "email": "",
  "age": 0,
  "phone": "",
  "panNo": "",
  "address": "",
  "role": "customer",
  "appyLoan": [
    {
      "loanType":"",
      "applicantName": "",
      "age":0,
      "occupation":"",
      "salary":"",
      "loanAmount":0,
      "status": ""

    }
  ]
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {

  message: string;
  error: boolean;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  addUser(form : NgForm){
    apply.email=form.value.email;
    apply.age=form.value.age;
    apply.fullName=form.value.fullName;
    apply.password=form.value.password;
    apply.panNo=form.value.panNo;
    apply.phone=form.value.phone;
    apply.role=form.value.role;
    apply.address=form.value.address;
    apply.appyLoan[0].applicantName=form.value.applicantName;
    apply.appyLoan[0].age=form.value.age;
    apply.appyLoan[0].loanType=form.value.loanType;
    apply.appyLoan[0].occupation=form.value.occupation;
    apply.appyLoan[0].loanAmount=form.value.loanAmount;
    apply.appyLoan[0].status=form.value.status;
    apply.appyLoan[0].salary=form.value.salary;
    console.log(apply);
    this.userService.postData(apply).subscribe(response=>{
      console.log(response);
        this.message=response.message;
        this.error=response.error;
        setTimeout(()=>{
          this.message=null;
          this.error=false;
        },5000);
    })
  }
}
