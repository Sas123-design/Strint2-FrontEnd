import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {

  user;
  success: string;
  constructor(private  service: ApplicationService ) { 
    this.viewApplications();
  }

  ngOnInit(): void {

  }

  viewApplications(){
    let userData=JSON.parse(localStorage.getItem('userData'));
    let email=userData.email;
    this.service.getData(email).subscribe(response=>{
      this.user=response.data;
      console.log(this.user);
      this.success=response.message;
      setTimeout(()=>{
        this.success=null;
      },5000)
    })
  }
}
