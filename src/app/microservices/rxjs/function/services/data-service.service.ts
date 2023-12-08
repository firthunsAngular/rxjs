import { Injectable } from '@angular/core';
import {catchError, delay, forkJoin, interval, map, Observable, of, tap} from "rxjs";
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

  getDataOne(): Observable<string> {
    return of('Datos de la fuente uno').pipe(delay(2000));
  }

  getDataTwo(): Observable<string> {
    return of('Datos de la fuente dos').pipe(delay(2000));
  }
  // Simula la obtención de datos de usuarios desde un servidor
  getUsers(): Observable<string[]> {
    return of(['Usuario 1', 'Usuario 2', 'Usuario 3']).pipe(
      // Simula un retraso en la obtención de datos para efectos visuales
      delay(1000)
    );
  }

  getInfo(userId: number): Observable<any> {
    const userMap: any = {
      1: { name: 'Usuario 1', email: 'usuario1@example.com' },
      2: { name: 'Usuario 2', email: 'usuario2@example.com' },
      3: { name: 'Usuario 3', email: 'usuario3@example.com' }
    };

    return of(userMap[userId]).pipe(delay(1000));
  }

  getUsersInformation(userIds: number[]): Observable<any[]> {
    const requests = userIds.map(userId => this.getInfo(userId));
    return forkJoin(requests);
  }
  getNumbers(): Observable<number[]> {
    // Simulando una secuencia de números
    return of([1, 2, 3, 4, 5]);
  }


}
