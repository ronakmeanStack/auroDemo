import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

export const adminRoute: Routes = [
  {
    path: '',
    component: AdminComponent
  }
];
