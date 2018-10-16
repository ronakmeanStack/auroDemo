import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import{CreateuserComponent} from './createuser/createuser.component'
import{PermissiontableComponent} from './permissiontable/permissiontable.component'
import { HomeComponent } from './home/home.component';
export const adminRoute: Routes = [
  {
    path: '',
    component: AdminComponent,
     children: [
      { path: '', redirectTo: '.app/admin', pathMatch: 'full' },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'create',
        component: CreateuserComponent
      },
      {
        path: 'usertable',
        component: PermissiontableComponent
      },
      {
      	path:'home',
      	component: HomeComponent
      }
     
    ]
  }
];
