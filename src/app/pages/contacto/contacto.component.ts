import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  id: string = "0103"
  name: string = "Cristian"

  constructor(private router: Router){
  }

  goAcerca(){
    console.log("llamando acerca de ", this.id, this.name)
    this.router.navigate(['paginas/acerca'])
  }
}
