import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  cities=['Kokata','Bangalore','Mumbai','Chennai','Delhi','Hyderabad'];
  constructor(private client : ClientService) { }

  ngOnInit(): void {
  }

  addClient(form : NgForm){ 
    this.client.postData(form.value).subscribe(response=>{
      console.log(response);

      form.reset();
    });

  }

}
