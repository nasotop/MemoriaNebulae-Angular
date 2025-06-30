import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './domains/auth/auth-layout/auth-layout.component';
import { IndexComponent } from './domains/index/pages/index/index.component';
import { ProfileComponent } from './domains/profile/pages/profile/profile.component';
import { AdminComponent } from './domains/index/pages/admin/admin.component';
export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./domains/auth/pages/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./domains/auth/pages/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: 'recovery',
        loadComponent: () =>
          import('./domains/auth/pages/recovery/recovery.component').then(
            (m) => m.RecoveryComponent
          ),
      },
    ],
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'index-admin', component: AdminComponent },
  { path: 'profile', component: ProfileComponent },
];
