import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { CustomerListComponent } from './customers-list/customers-list.component';
import { CustomerDetailComponent } from './customer-details/customer-details.component';
import { AlertComponent } from './alert.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    CreateCustomerComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    SearchCustomerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
