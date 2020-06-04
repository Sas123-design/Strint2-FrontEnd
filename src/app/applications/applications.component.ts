import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  users;
  applications;
  fieldName;
  searchValue;
  pageNo=0;
  itemsPerPage=2; 
  totalItems;
  email: string;
  searchBy="applicantName"
  constructor(private applicationService: ApplicationService,
              private router:Router
    ) { }

  ngOnInit(): void {
    // this.applicationService.getApplications(this.pageNo,this.itemsPerPage, null).subscribe(data=>{
    //   console.log(data);
    //   this.applications=data.content;
    //   this.totalItems=data.totalElements;
    // });
    this.viewApplications();
  }

  getApplication(fieldName){
    this.applicationService.getApplications(this.pageNo,this.itemsPerPage, fieldName).subscribe(data=>{
      console.log(data);
      this.applications=data.content;
      this.totalItems=data.totalElements;
    });
  }

  getNextPageItems(event){
    console.log(event);
    this.pageNo=event.pageIndex;
    this.itemsPerPage=event.pageSize;
    this.getApplication(null);
  }

  getSotedData(){
      console.log(this.fieldName);
      this.getApplication(this.fieldName);
  }

  selectApplication(application){
    this.router.navigate(['/edit-application'], {queryParams: application});
  }

  viewApplications(){
    let userData=JSON.parse(localStorage.getItem('userData'));
    let email=userData.email;
    this.applicationService.getData(email).subscribe(response=>{
      console.log(response);
    })
  }
}
