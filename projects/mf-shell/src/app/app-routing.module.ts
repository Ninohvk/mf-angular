import { WebComponentWrapper, WebComponentWrapperOptions, startsWith } from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('mfTickets/TicketsModule').then((m) => m.TicketsModule)
  },
  {
    path: 'profile', loadComponent: () => import('mfProfile/ProfileComponent').then((m) => m.ProfileComponent)
  },
  {
    path: 'dashboard', loadComponent: () => import('mfDashboard/DashboardComponent').then((m) => m.DashboardComponent)
  },
  // {
  //   matcher: startsWith('header'),
  //   component: WebComponentWrapper,
  //   data: {
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4204/remoteEntry.js',
  //       exposedModule: './HeaderComponent',
  //       elementName: 'app-header'
  //   } as WebComponentWrapperOptions,
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
