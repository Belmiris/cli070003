import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';         // Now in SharedModule
//import { ReactiveFormsModule } from '@angular/forms';   // Now in SharedModule

import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeesComponent } from './list-employees.component';

@NgModule({
  imports: [
    //CommonModule,               // Now in SharedModule
    //ReactiveFormsModule,        // Now in SharedModule
    EmployeeRoutingModule,
    SharedModule
  ],
  declarations: [
    CreateEmployeeComponent,
    ListEmployeesComponent
  ]
})
export class EmployeeModule { }
