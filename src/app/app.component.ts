import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Cartagena de Indias'; // Nombro la variable con el contenido en el componente padre.
  img = 'assets/imagenes/cartagena.jpeg';
  descripcion = 'Esta es la descripción del vuelo';
  precio = 25000;
}