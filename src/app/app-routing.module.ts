import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AnuncioComponent } from './anuncio/anuncio.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'anuncio', component: AnuncioComponent},
  {path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
