import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { LoginComponent } from './login/login.component';
import { AddClientComponent } from './add-client/add-client.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoanprogramsComponent } from './loanprograms/loanprograms.component'
import { NgxPaginationModule} from 'ngx-pagination';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material/paginator';
import { SearchLoanPipe } from './search-loan.pipe';
import { ClientComponent } from './client/client.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ClientPipe } from './client.pipe';
import { ApplicationPipe } from './application.pipe';
import { EditClientComponent } from './edit-client/edit-client.component';
import { EditLoanprogramComponent } from './edit-loanprogram/edit-loanprogram.component';
import { HomeComponent } from './home/home.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewRejectedComponent } from './view-rejected/view-rejected.component';
import { ViewApprovedComponent } from './view-approved/view-approved.component';
import { ViewRequestedComponent } from './view-requested/view-requested.component';
import { UserServiceService } from './user-service.service';
import { RequestInceptor } from './request.interceptor';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApplyLoanComponent,
    LoginComponent,
    AddClientComponent,
    LoanprogramsComponent,
    AddLoanComponent,
    SearchLoanPipe,
    ClientComponent,
    ApplicationsComponent,
    ClientPipe,
    ApplicationPipe,
    EditClientComponent,
    EditLoanprogramComponent,
    HomeComponent,
    EditApplicationComponent,
    RegistrationComponent,
    ViewUserComponent,
    ViewRejectedComponent,
    ViewApprovedComponent,
    ViewRequestedComponent,
    ViewApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [
    UserServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
