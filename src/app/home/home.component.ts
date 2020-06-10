import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string;
  constructor(public userService: UserServiceService) {
    this.welcome();
  }

  ngOnInit(): void {
  }

  welcome(){
    let userData=JSON.parse(localStorage.getItem('userData'));
    this.name=userData.fullName;
  }
}
