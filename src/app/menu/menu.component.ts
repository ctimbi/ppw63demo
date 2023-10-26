import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  paginas = [
    {titulo: 'Acerca de', path: 'paginas/acerca'},
    {titulo: 'Contacto', path: 'paginas/contacto'},
    {titulo: 'Mapa del sitio', path: 'paginas/mapa'},
  ]
}
