import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
import { authGuard } from './Guardias/auth.guard';
=======
import { authGuard } from './Guards/auth.guard';
>>>>>>> Stashed changes

const routes: Routes = [
  {
    path: 'home',
<<<<<<< Updated upstream
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
=======
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
>>>>>>> Stashed changes
  },
  {
    path: '',
    redirectTo: 'home',
<<<<<<< Updated upstream
    pathMatch: 'full',
  },
  {
    path: 'perfil',
    loadChildren: () =>
=======
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    loadChildren: () => 
>>>>>>> Stashed changes
      import('./perfil/perfil.module').then((m) => m.PerfilPageModule),
    canActivate: [authGuard],
  },
  {
    path: 'recuperar-contrasenia',
<<<<<<< Updated upstream
    loadChildren: () =>
      import('./recuperar-contrasenia/recuperar-contrasenia.module').then(
        (m) => m.RecuperarContraseniaPageModule
      ),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./error/error.module').then((m) => m.ErrorPageModule),
=======
    loadChildren: () => import('./recuperar-contrasenia/recuperar-contrasenia.module').then( m => m.RecuperarContraseniaPageModule),
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
>>>>>>> Stashed changes
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];

@NgModule({
  imports: [
<<<<<<< Updated upstream
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
=======
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> Stashed changes
