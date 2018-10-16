import { Routes } from '@angular/router';

// Auth Guard Service
import {AuthGuard} from './auth/auth.guard'
//components
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoute: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: DashboardComponent,
    canActivate:[AuthGuard],

    children: [
      {
        path: 'admin',
        loadChildren: 'src/app/admin/admin.module#AdminModule'
      },
      {
        path: 'reviewer',
        loadChildren: 'src/app/user/user.module#UserModule'
      },
       {
        path: 'researcher',
        loadChildren: 'src/app/researcher/researcher.module#ResearcherModule'
      }
    ]
  }
];
