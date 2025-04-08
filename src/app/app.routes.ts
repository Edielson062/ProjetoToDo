import { Routes } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {InfoComponent} from './info/info.component';
import {FormularioComponent} from './formulario/formulario.component';
import {ListaComponent} from './lista/lista.component';

export const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'info', component: InfoComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'lista', component: ListaComponent},
  {path: '', redirectTo: '/lista', pathMatch:'full'}
];
