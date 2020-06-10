import { Component, OnInit } from '@angular/core';
import { StatusServiceService } from '../status-service.service';

@Component({
  selector: 'app-view-rejected',
  templateUrl: './view-rejected.component.html',
  styleUrls: ['./view-rejected.component.css']
})
export class ViewRejectedComponent implements OnInit {

  users;
  pageNo=0;
  itemsPerPage=2;
  totalItems;
  constructor(private service: StatusServiceService) {
    this.getRejected();
  }

  ngOnInit(): void {

  }
  
  getRejected(){
    this.service.getRejected().subscribe(response=>{
      console.log(response);
      this.users=response.data;
      console.log(this.users);
    })
  }


}
