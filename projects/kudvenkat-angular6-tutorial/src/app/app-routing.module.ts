import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
//import { ListEmployeesComponent } from './employee/list-employees.component';
//import { CreateEmployeeComponent } from './employee/create-employee.component';
import { CustomPreloadingService } from './custom-preloading.service';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
//{ path: 'list', component: ListEmployeesComponent },      // moved to employee-routing.module
//{ path: 'create', component: CreateEmployeeComponent },   // moved to employee-routing.module
//{ path: 'edit/:id', component: CreateEmployeeComponent }, // moved to employee-routing.module
  { path: '', redirectTo: '/home', pathMatch: 'full' },
//{ path: 'employees', loadChildren: './employee/employee.module#EmployeeModule' }, // lazy loaded-before wildcard!
  { path: 'employees', data: { preload: true }, loadChildren: './employee/employee.module#EmployeeModule' }, // added custom data for custom preloading service
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloadingService })  // Custom Preloading with our Service
  //RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })  // preload all //CustomPreloadingService
  //RouterModule.forRoot(appRoutes, { preloadingStrategy: NoPreloading })   // default
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
