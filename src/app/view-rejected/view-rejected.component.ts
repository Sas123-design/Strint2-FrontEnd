import { Component, OnInit } from '@angular/core';
import { StatusServiceService } from '../status-service.service';

@Component({
  selector: 'app-view-rejected',
  templateUrl: './view-rejected.component.html',
  styleUrls: ['./view-rejected.component.css']
})
export class ViewRejectedComponent implements OnInit {

  users;
  page=0;
  itemsPerPage=2;
  totalItems;
  constructor(private service: StatusServiceService) {
    this.getRejectedApplication();
  }

  getRejectedApplication(){
    // this.service.getPageRejected(this.page,this.itemsPerPage).subscribe(response=>{
    //   console.log(response);
    //   this.users=response.content;
    //   this.totalItems=response.totalElement;


    // })
    this.service.getRejected().subscribe(response=>{
      console.log(response);
      this.users=response.data;
    })
  }

  ngOnInit(): void {
    
  }

}
