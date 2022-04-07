import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
