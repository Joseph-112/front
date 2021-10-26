import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './administrador/default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DocumentosComponent } from './administrador/documentos/documentos.component';
import { EncuestasComponent } from './administrador/encuestas/encuestas.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {


    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'Documentos',
    component: DocumentosComponent
  },
  {
    path: 'Encuesta',
    component: EncuestasComponent
  },]

}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 