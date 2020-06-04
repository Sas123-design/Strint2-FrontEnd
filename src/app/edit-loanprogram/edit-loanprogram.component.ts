import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanprogramsService } from '../loanprograms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-loanprogram',
  templateUrl: './edit-loanprogram.component.html',
  styleUrls: ['./edit-loanprogram.component.css']
})
export class EditLoanprogramComponent implements OnInit {

  programToUpdate;
  constructor(private route: ActivatedRoute,
              private prorgamService: LoanprogramsService,
              private router: Router) { 
    this.route.queryParams.subscribe(data=>{
      this.programToUpdate=data;
      console.log(this.programToUpdate);
    });
  }

  updateProgram(form: NgForm){
    this.prorgamService.updateData(form.value).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        form.reset();
        this.router.navigateByUrl('/loanprograms');
      }
    });
  }

  ngOnInit(): void {
  }

}
