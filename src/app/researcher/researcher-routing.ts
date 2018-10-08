import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResearcherComponent } from './researcher.component';

export const researcherRoute: Routes = [
  {
    path: '',
    component: ResearcherComponent
  }
];
