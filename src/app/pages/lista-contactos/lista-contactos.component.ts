import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { ContactosFirebaseService } from 'src/app/services/contactos-firebase.service';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent  {

  contactos:Persona[] = []

  listaContactos: any

  constructor(private contactoService: ContactosService,
      private router: Router, private contactosFirebaseService: ContactosFirebaseService){
    this.contactos = contactoService.getContactos()

    this.listaContactos = this.contactosFirebaseService.getAll()
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
