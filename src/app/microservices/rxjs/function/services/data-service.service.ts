import { Injectable } from '@angular/core';
import {catchError, interval, map, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ajax} from "rxjs/internal/ajax/ajax";
import {AppSettings} from "../../../../core/models/app-settings";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private rxjsInfoUrl = 'assets/rxjs_info/rxjs_info.json';
  public innerHTML= '';
  constructor(private http: HttpClient) {}
  getData(): Observable<number> {
    return interval(1000); // Emite un número cada segundo
  }

  search(term: string): Observable<string[]> {
    // Aquí debes reemplazar 'URL_DE_TU_API' con la URL real de tu API de búsqueda
    const apiUrl = `https://api.github.com/search/repositories?q=${term}`;
    return this.http.get<string[]>(apiUrl);
  }

  getInfoByTag(tag: string): Observable<string> {
    return this.http.get<any>(this.rxjsInfoUrl).pipe(
      map((data: any) => {
        const info = data[tag];
        if (info) {
          this.innerHTML= info;
          return info;
        } else {
          throw new Error(`No se encontró información para el tag "${tag}"`);
        }
      })
    );
  }

}
