import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { LoanprogramsComponent } from './loanprograms/loanprograms.component';
import { ClientComponent } from './client/client.component';
import { ApplicationsComponent } from './applications/applications.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { EditLoanprogramComponent } from './edit-loanprogram/edit-loanprogram.component';
import { HomeComponent } from './home/home.component';

import { RegistrationComponent } from './registration/registration.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { ViewRequestedComponent } from './view-requested/view-requested.component';
import { ViewRejectedComponent } from './view-rejected/view-rejected.component';
import { ViewApprovedComponent } from './view-approved/view-approved.component';
import { AuthGaurd } from './auth.gaurd';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';


const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'apply-loan', component:ApplyLoanComponent, data:{roles:['ROLE_CUSTOMER']}, canActivate: [AuthGaurd]},
  {path: 'add-client', component:AddClientComponent, data:{roles: ['ROLE_ADMIN']} ,canActivate: [AuthGaurd]},
  {path: 'add-loan', component:AddLoanComponent, data:{roles: ['ROLE_ADMIN']} ,canActivate: [AuthGaurd]},
  {path: 'loanprograms', component:LoanprogramsComponent},
  {path: 'client', component:ClientComponent},
  {path: 'view-applications', component: ViewApplicationsComponent},
  {path: 'applications', component:ApplicationsComponent},
  {path: 'edit-client', component:EditClientComponent, },
  {path: 'edit-loanprogram', component:EditLoanprogramComponent},
  {path: 'home', component:HomeComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'view-user', component:ViewUserComponent},
  {path: 'edit-application', component:EditApplicationComponent},
  {path: 'view-requested', component:ViewRequestedComponent, data:{roles: ['ROLE_LAD','ROLE_ADMIN']} ,canActivate: [AuthGaurd]},
  {path: 'view-rejected', component:ViewRejectedComponent, data:{roles: ['ROLE_LAD','ROLE_ADMIN']} ,canActivate: [AuthGaurd]},
  {path: 'view-approved', component:ViewApprovedComponent, data:{roles: ['ROLE_LAD','ROLE_ADMIN']} ,canActivate: [AuthGaurd]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
