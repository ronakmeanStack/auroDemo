import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

export const userRoute: Routes = [
  {
    path: '',
    component: UserComponent
  }
];
