import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos la página para routing:
import {ContactoComponent} from './pages/contacto/contacto.component'; // ./ es la raíz del proyecto. En {} se pone el nombre del archivo que sale del archivo.ts del componente que quiero importar.
import { PromocionesComponent } from 'src/app/pages/promociones/promociones.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'promociones', component: PromocionesComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
