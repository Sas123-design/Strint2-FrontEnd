import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients;
  pageNo=0;
  itemsPerPage=2;
  totalItems;
  fieldName;
  searchValue;
  searchBy="name";
  message: string;
  constructor(private clientService : ClientService,
              private router: Router) { }

  ngOnInit(): void {
    this.clientService.getAllClients(this.pageNo,this.itemsPerPage,null).subscribe(data=>{
      console.log(data);
      this.clients=data.content;
      this.totalItems=data.totalElements;
    });
  }


  getClients(fieldName){
    this.clientService.getAllClients(this.pageNo,this.itemsPerPage,fieldName).subscribe(data=>{
      console.log(data);
      this.clients=data.content;
      this.totalItems=data.totalElements;
    });
  }
  getNextPageItems(event){
    console.log(event);
    this.pageNo=event.pageIndex;
    this.itemsPerPage=event.pageSize;
    this.getClients(null) ;
  }

  getSortedData(){
    console.log(this.fieldName);
    this.getClients(this.fieldName);
  }

  deleteClient(client){
    this.clientService.deleteData(client).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.getClients(this.fieldName);
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        }, 5000);
      }
    })
  }

  selectClient(client){
    this.router.navigate(['/edit-client'], {queryParams: client});
  }
}
