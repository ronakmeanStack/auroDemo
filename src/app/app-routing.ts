import { Routes } from '@angular/router';

// Auth Guard Service

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

    children: [
      {
        path: 'admin',
        loadChildren: 'src/app/admin/admin.module#AdminModule'
      },
      {
        path: 'user',
        loadChildren: 'src/app/user/user.module#UserModule'
      },
       {
        path: 'researcher',
        loadChildren: 'src/app/researcher/researcher.module#ResearcherModule'
      }
    ]
  }
];
