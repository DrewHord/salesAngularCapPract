import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { E404Component } from './e404/e404.component';
import { HomeComponent } from './home/home.component';
import { CustomerCreateComponent } from './sales/customer/customer-create/customer-create.component';
import { CustomerDetailComponent } from './sales/customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './sales/customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './sales/customer/customer-list/customer-list.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},

  { path: "customer/list", component: CustomerListComponent },
  { path: "customer/create", component: CustomerCreateComponent},
  { path: "customer/detail/:id", component: CustomerDetailComponent},
  { path: "customer/edit/:id", component: CustomerEditComponent},


  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
