import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGaurd } from './pages/order/login.guard';

const routes: Routes = [
  // ===== Uncomment if Path.Home is different from empty =====
  // { path: '', redirectTo: Path.Home, pathMatch: 'full' },

  // Public
  {
    path: '',
    loadChildren: () =>
      import('@pages/login/login.module').then((m) => m.LoginModule),
  },

  // Auth
  {
    path: 'orders',
    canActivate: [LoginGaurd],
    loadChildren: () =>
      import('@app/pages/order/order.module').then((m) => m.OrderModule),
  },
  // Not found page (must go at the bottom)
  {
    path: '**',
    loadChildren: () =>
      import('@pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
