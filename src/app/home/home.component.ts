import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string;
  constructor() {
    this.welcome();
  }

  ngOnInit(): void {
  }

  welcome(){
    let userData=JSON.parse(localStorage.getItem('userData'));
    this.name=userData.fullName;
  }
}
