import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent , children:[
    {path: 'customer', component: CustomerListComponent },
    {path: 'addCustomer', component: CreateCustomerComponent },
    {path: 'findByAge', component: SearchCustomerComponent }
  ]},
];

// const routes: Routes = [
//   {path: '', redirectTo:'login', pathMatch: 'full' },
//   {path: 'login', component: LoginComponent , children:[
//     {path: 'customer', component: CustomerListComponent, outlet: 'customerList' },
//     {path: 'addCustomer', component: CreateCustomerComponent, outlet: 'addCustomerData' },
//     {path: 'findByAge', component: SearchCustomerComponent, outlet:'fetchByAge' }
//   ]},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
