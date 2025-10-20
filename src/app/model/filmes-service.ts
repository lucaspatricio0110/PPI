import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private http = inject(HttpClient);
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = 'SUA_CHAVE_DE_API_AQUI'; // 🔑 coloque aqui sua chave OMDB

  obterFilme(titulo: string): Observable<Filme> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&t=${encodeURIComponent(titulo)}`;
    return this.http.get<Filme>(url);
  }

  buscarLista(titulo: string): Observable<any> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${encodeURIComponent(titulo)}`;
    return this.http.get<any>(url);
  }
}
