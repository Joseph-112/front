import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ProgFechasComponent } from './administrador/prog-fechas/prog-fechas.component';
import { ResultadosComponent } from './administrador/resultados/resultados.component';
import { DocenteComponent } from './docente/docente.component';
import { EncuestaComponent } from './docente/encuesta/encuesta.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { DocumentosComponent } from './administrador/documentos/documentos.component';
import { AdminServiceService } from './admin-service.service';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    ProgFechasComponent,
    ResultadosComponent,
    DocenteComponent,
    EncuestaComponent,
    EstudianteComponent,
    DocumentosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AdminServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
