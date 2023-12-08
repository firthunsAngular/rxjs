import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, Subject, switchMap} from "rxjs";
import {DataServiceService} from "../services/data-service.service";

@Component({
  selector: 'app-debounce-time',
  standalone: true,
  imports: [],
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.css'
})
export class DebounceTimeComponent implements OnInit{
  private searchTerms = new Subject<string>();
  searchResults: string[] = [];

  constructor(private apiService: DataServiceService) {
  }
  ngOnInit(): void {
    //   Ejemplo 2
    this.searchTerms.pipe(
      debounceTime(300), // Espera 300ms después de la última pulsación
      distinctUntilChanged(), // Evita enviar solicitudes duplicadas
      switchMap(term => this.apiService.search(term)) // Realiza la búsqueda en la API
    ).subscribe((results: string[]) => {
      this.searchResults = results;
    });
  }

  onSearch(term: string): void {
    this.searchTerms.next(term); // Emite el término de búsqueda al observable
  }
}
