import { Injectable } from '@angular/core';
import {
  catchError,
  delay,
  dematerialize,
  exhaustAll,
  forkJoin,
  interval,
  map,
  Observable,
  of,
  take,
  tap,
  timer
} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private rxjsInfoUrl = 'assets/rxjs_info/rxjs_info.json';
  public innerHTML= '';


  constructor(private http: HttpClient) {

  }
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

// defaultEmpty

  // Simulando una llamada que devuelve datos o un observable vacío
  getDataDefaultEmpty(): Observable<any[]> {
    // Simulación de datos. En un escenario real, podrías hacer una llamada HTTP aquí.
    const mockData: any[] = [/* tus datos */];

    // Emite datos o un observable vacío
    return mockData.length > 0 ? of(mockData) : of([]);
  }

// defer
  fetchData(): Observable<string[]> {
    // Simulando una llamada asincrónica que devuelve datos después de un retraso de 2 segundos
    return of(['Dato 1', 'Dato 2', 'Dato 3']).pipe(delay(2000));
  }

//   delay
  getDataDeal(): Observable<string> {
    // Simulamos la obtención de datos con un string después de 2 segundos
    return of('Datos obtenidos del servicio').pipe(delay(2000));
  }

// delayWhen
  fetchDatadelayWhen(): Observable<any> {
    const mockData = ['Dato 1', 'Dato 2', 'Dato 3']; // Datos falsos
    return of(mockData).pipe(delay(3000)); // Simula un retraso de 3 segundos
  }

// distinct
  // Simula una llamada HTTP que devuelve datos
  getDatadistinct(): Observable<number[]> {
    // Simulando datos con duplicados
    return of([1, 2, 2, 3, 4, 4, 5]);
  }

  private mockDataelementAt = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5'];
  // elementAt
  getDataelementAt(): Observable<string[]> {
    return of(this.mockDataelementAt);
  }
  // endWith


  getItemsendWith(): Observable<string[]> {
    // Simulación de obtención de datos
    return of(['Item 1', 'Item 2', 'Item 3']);
  }

//every

  getNumbersevery(): Observable<number[]> {
    // Simulando una lista de números
    return of([1, 2, 3, 4, 5]);
  }

//exhaustAll
  getObservable1exhaustAll(): Observable<number> {
    return interval(1000).pipe(take(5));
  }

  getObservable2exhaustAll(id: number): Observable<string> {
    return timer(1000).pipe(
      delay(500),
      // Simulamos datos diferentes según el ID
      map(() => `Data for ID ${id}`)
    );
  }

  getDataexhaustMap(id: number) {
    return of(`Respuesta para el ID: ${id}`).pipe(delay(1000));
  }

// forkJoin
  getUsersforkJoin(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPostsforkJoin(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }



}
