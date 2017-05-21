import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionComponent } from './function.component';
import { Routes, RouterModule } from '@angular/router';
import { TreeModule } from 'angular-tree-component';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

const functionRoutes: Routes = [
  //localhost:4200/main/function
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  //localhost:4200/main/function/index
  { path: 'index', component: FunctionComponent }
]

@NgModule({
  imports: [
    CommonModule,
    TreeModule,
    FormsModule,
    ModalModule,
    RouterModule.forChild(functionRoutes)
  ],
  declarations: [FunctionComponent],
  providers :[DataService, NotificationService]

})
export class FunctionModule { }
