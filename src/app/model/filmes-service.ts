import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private http = inject(HttpClient)
  obterFilme(Titulo: string): Observable<Filme> {
    return this.http.get<Filme>("")
  }
}
