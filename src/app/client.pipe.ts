import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'client'
})
export class ClientPipe implements PipeTransform {

  transform(clients: any[], searchValue: string, fieldName): unknown {
    if(!clients){
      return []; 
    }
    if(!searchValue){
      return clients;
    }
    searchValue=searchValue.toLowerCase();

    return clients.filter(client=>{
      return client[fieldName].toLowerCase().includes(searchValue);
    });
  }

}
