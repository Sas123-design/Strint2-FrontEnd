import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatusServiceService } from '../status-service.service';

@Component({
  selector: 'app-view-approved',
  templateUrl: './view-approved.component.html',
  styleUrls: ['./view-approved.component.css']
})
export class ViewApprovedComponent implements OnInit {


  constructor(private service: StatusServiceService) {
    this.getApprovedApplication();
  }

  ngOnInit(): void {
  }

  users;

  getApprovedApplication(){
    this.service.getApproved().subscribe(response=>{
      console.log(response);
      this.users=response.data;
    })
  }

}
