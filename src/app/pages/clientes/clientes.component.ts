import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit{
  clientes: any

  client: Cliente = new Cliente()

  constructor(private clientesService: ClientesService){

  }

  ngOnInit(): void {
      this.clientes = this.clientesService.getClientes()
  }

  guardar(){
    this.clientesService.saveCliente(this.client).subscribe(data => {
      console.log(data)
      if(data.codigo == 1)
        this.ngOnInit()
      else
        alert("Error al insertar " + data.mensaje)
    })
  }

}
