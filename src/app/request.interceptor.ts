import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class RequestInceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, handler: HttpHandler){
        console.log('intercept method is called');
        let registerData = JSON.parse(localStorage.getItem('userData'));
      
        if(registerData){
            let token = registerData.token;
            var modifiedRequest = req.clone({
                headers: req.headers.append('Authorization', 'Bearer '+token)
            });
          return handler.handle(modifiedRequest);
        } else{
          return handler.handle(req);
          }
      }
  
    
}