import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USERROUTES } from './components/usuario/usuario.routes';



const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:id', // PArametro de ejemplo
      component: UsuarioComponent,
      children: USERROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot( ROUTES ) ;
