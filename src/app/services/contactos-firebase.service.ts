import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Persona } from '../domain/persona';

@Injectable({
  providedIn: 'root'
})
export class ContactosFirebaseService {

  private path = '/contactos'

  contactosRef: AngularFirestoreCollection<any>

  constructor(private db: AngularFirestore) { 
    this.contactosRef = db.collection(this.path)

    this.contactosRef.valueChanges().subscribe(data => {
      console.log(data)
    })
  }

  getAll(){
    return this.contactosRef.valueChanges()
  }

  save(persona: Persona){
    const uid = this.db.createId()
    persona.uid = uid
    console.log('persona', persona)
    return this.contactosRef.doc(uid).set(Object.assign({}, persona))
  }

  getPersona(uid: string){
    console.log('uid', uid)
    return this.db.doc(this.path+'/'+uid).valueChanges()
  }
}
