import { Injectable } from '@angular/core';
import { Persona } from '../domain/persona';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  contatos:Persona[] = []

  constructor() { }

  addContacto(persona: Persona){
    this.contatos.push(persona)
  }

  getContactos(){
    return this.contatos
  }
}
