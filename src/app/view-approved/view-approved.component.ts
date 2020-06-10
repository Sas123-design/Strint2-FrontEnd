import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatusServiceService } from '../status-service.service';

@Component({
  selector: 'app-view-approved',
  templateUrl: './view-approved.component.html',
  styleUrls: ['./view-approved.component.css']
})
export class ViewApprovedComponent implements OnInit {
  users;
  pageNo=0;
  itemsPerPage=2;
  totalItems;
  constructor(private service: StatusServiceService) {
    this.getApproved();
  }

  ngOnInit(): void {
    
  }
  getApproved(){
    this.service.getApproved().subscribe(response=>{
      console.log(response);
      this.users=response.data;
    })
  }
  
  getNextPageItem(event){
    console.log(event);
    this.pageNo=event.pageIndex;
    this.itemsPerPage=event.pageSize;
    this.getApproved();
  }


}
