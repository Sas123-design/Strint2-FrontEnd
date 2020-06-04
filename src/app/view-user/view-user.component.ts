import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  users;
  message: string;
  constructor(private uerService: UserServiceService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.uerService.getData().subscribe(data=>{
      console.log(data);
      this.users=data;
    })
  }

  deleteUser(user){
    this.uerService.deleteData(user).subscribe(data=>{
      console.log(data);
      if(data.error===false){
        this.getUser();
        this.message=data.message;
        setTimeout(()=>{
          this.message=null;
        }, 5000)
      }
    });
  }
}
