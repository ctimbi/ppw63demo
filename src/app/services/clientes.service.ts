import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getClientes(){
    let url = environment.WS_PATH + "/clientes/list"
    return this.http.get<any>(url)
  }

  saveCliente(cliente: Cliente){
    let url = environment.WS_PATH + "/clientes"
    return this.http.post<any>(url, cliente)
  }
}
