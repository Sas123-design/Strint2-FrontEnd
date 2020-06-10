import { Component, OnInit } from '@angular/core';
import { LoanprogramsService } from '../loanprograms.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  constructor(private loanProgram:LoanprogramsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  postLoanProgram(form : NgForm){
    this.loanProgram.postData(form.value).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl('/loanprograms');
    });
  }
}
