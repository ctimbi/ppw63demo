import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ListaContactosComponent } from './pages/lista-contactos/lista-contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    ContactoComponent,
    MenuComponent,
    ListaContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
