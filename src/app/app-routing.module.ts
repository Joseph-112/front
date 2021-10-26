import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosComponent } from './administrador/documentos/documentos.component';
import { EncuestasComponent } from './administrador/encuestas/encuestas.component';

const routes: Routes = [
   {
    path: 'Documentos',
    component: DocumentosComponent
  },
  {
    path: 'Encuesta',
    component: EncuestasComponent
  },
]

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }