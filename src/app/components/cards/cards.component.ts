import { Component, OnInit, Input } from '@angular/core'; //Agrego Input para que funcione.

@Component({
  selector: 'app-cards', // El nombre que va en la etiqueta que llama desde el html al componente.
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  @Input() titulo: string; // Input para exportar info del componente padre al componente hijo.
  @Input() img = 'assets/imagenes/cartagena.jpeg';
  @Input() descripcion?: string; // Opcional.
  @Input() precio: number;

  ngOnInit() { // Es un evento de Angular que da inicio al componente.
    console.log(this.titulo);
    // Cuando se declara fuera de init debemos agregarle this para que sepa que tiene que ir a buscar el elemento por fuera.
    // La mayoría de las cosas no van codeadas dentro de este evento porque el componente carga antes que el evento entonces si creo la variable dentro no aparece.
  }

}