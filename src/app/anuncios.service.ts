import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { anuncio } from './anuncios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {
  url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getAnuncios(): Observable<anuncio[]> {
    return this.http.get<anuncio[]>(`${this.url}/anuncios`);
  }

  save(anuncio: anuncio): Observable<anuncio>{
    return this.http.post<anuncio>(`${this.url}/anuncios`, anuncio);
  }

  edit(anuncio: anuncio): Observable<void>{
    return this.http.put<void>(`${this.url}/anuncios/${anuncio.id}`, anuncio);
  }

  delete(anuncio: anuncio): Observable<void>{
    return this.http.delete<void>(`${this.url}/anuncios/${anuncio.id}`);
  }
}
