import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  cities=['Kokata','Bangalore','Mumbai','Chennai','Delhi','Hyderabad'];
  clientToUpdate;
  constructor(private route: ActivatedRoute,
            private clientService: ClientService, private router: Router) {
    this.route.queryParams.subscribe(data=>{
      this.clientToUpdate = data;
      console.log(this.clientToUpdate);
    });
  }

  ngOnInit(): void {
  }

  updateClient(form: NgForm){
    this.clientService.updateData(form.value).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        form.reset();
        this.router.navigateByUrl('/client');
      }
    })
  }

}
