import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent {

  contactos:Persona[] = []

  constructor(private contactoService: ContactosService,
      private router: Router){
    this.contactos = contactoService.getContactos()
  }

  goEditar(contacto: any){
    console.log("editando", contacto)

    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto
      }
    }

    this.router.navigate(['paginas/contacto'], params)
  }

}
