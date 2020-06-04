import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.css']
})
export class EditApplicationComponent implements OnInit {

  appToUpdate;
  constructor(private rout: ActivatedRoute,
              private servive: ApplicationService
    ) {
    this.rout.queryParams.subscribe(data=>{
      this.appToUpdate=data;
      console.log(this.appToUpdate);
    });
  }

  updateApplication(form: NgForm){
    this.servive.updateData(form.value).subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
