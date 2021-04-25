import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Q1Component } from './app/components/q1/q1.component';
import { Q2Component } from './app/components/q2/q2.component';
import { Q3Component } from './app/components/q3/q3.component';
import { Q4Component } from './app/components/q4/q4.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'app/Q1', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'documentList', component: DocumentListComponent },
  {path:'app/Q1', component:Q1Component},
  {path:'app/Q2',component:Q2Component},
  {path:'app/Q3',component:Q3Component},
  {path:'app/Q4',component:Q4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
