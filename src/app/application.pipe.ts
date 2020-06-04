import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'application'
})
export class ApplicationPipe implements PipeTransform {

  transform(applications : any[], searchValue: any, fieldName): unknown {
    if(!applications){
      return [];
    }
    if(!searchValue){
      return applications;
    }
    searchValue=searchValue.toLowerCase();
    
    return applications.filter(application=>{
      if(isNaN(searchValue)){
        return application[fieldName].toLowerCase().includes(searchValue);
      }
      else{
        return application[fieldName].toString().toLowerCase().includes(searchValue);
      }
    });

  }

}
