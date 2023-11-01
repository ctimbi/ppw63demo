import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  //id: string = "0103"
  //name: string = "Cristian"

  persona: Persona = new Persona();

  constructor(private router: Router, 
    private contactoServices: ContactosService){ 

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.persona = params['contacto']

      }
  }

  savePersona(){
    this.contactoServices.addContacto(this.persona)
    this.persona = new Persona();
    console.log('contacots', this.contactoServices.getContactos())
  }

  goAcerca(){
    console.log("llamando acerca de ", this.persona)
    this.router.navigate(['paginas/acerca'])
  }

  goListado(){
    this.router.navigate(['paginas/listado-contactos'])
  }
}
