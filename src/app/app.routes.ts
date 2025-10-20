import { Routes } from '@angular/router';
import { BuscaFilme } from './busca/busca-filme';
import { BuscaLista } from './busca/busca-lista';

export const routes: Routes = [
  { path: '', redirectTo: 'filme', pathMatch: 'full' },
  { path: 'filme', component: BuscaFilme },
  { path: 'lista', component: BuscaLista },
];
