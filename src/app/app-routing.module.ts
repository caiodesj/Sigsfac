import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './core/guards/noAuth.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calendar',
  },

  // Rotas Auth

  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'auth',
    },
    // canActivate: [NoAuthGuard],
    // canActivateChild: [NoAuthGuard],

    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('src/app/features/auth/login/login.module').then(
            (m) => m.SignInModule
          ),
      },
      {
        path: 'logout',
        loadChildren: () =>
          import('src/app/features/auth/logout/logout.module').then(
            (m) => m.LogoutModule
          ),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('src/app/features/auth/sign-up/sign-up.module').then(
            (m) => m.SignUpModule
          ),
      },
    ],
  },

  // Rotas default

  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'default',
    },

    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],

    children: [
      {
        path: 'calendar',

        loadChildren: () =>
          import('src/app/features/calendar/calendar.module').then(
            (m) => m.CalendarWeekModule
          ),
      },

      {
        path: 'custom-reports',
        loadChildren: () =>
          import(
            'src/app/features/reports/custom-reports/custom-reports.module'
          ).then((m) => m.CustomReportsModule),
      },

      {
        path: 'ras-report',
        loadChildren: () =>
          import('src/app/features/reports/ras-report/ras-reports.module').then(
            (m) => m.RasReportsModule
          ),
      },

      {
        path: 'activitie-report',
        loadChildren: () =>
          import(
            'src/app/features/reports/activitie-report/activitie-report.module'
          ).then((m) => m.ActivitieReportModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
