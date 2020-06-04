import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  constructor(private service: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form : NgForm){
    console.log(form.value);
    this.service.login(form.value).subscribe(response=>{
      console.log(response);
      if(response.error){
        response.message=this.message;
        setTimeout(()=>{
          this.message=null;
        },5000);
      }else{
        localStorage.setItem('userData',JSON.stringify(response));
        this.router.navigateByUrl('/home');
      }
    })
  }
}
