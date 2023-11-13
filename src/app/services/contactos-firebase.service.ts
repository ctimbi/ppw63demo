import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'

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
}
