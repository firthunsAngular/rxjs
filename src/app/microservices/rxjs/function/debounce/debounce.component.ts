import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../services/data-service.service";
import {debounceTime, Subject} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-debounce',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './debounce.component.html',
  styleUrl: './debounce.component.css'
})
export class DebounceComponent  implements OnInit{
  searchTerm: string = '';
  searchResults: string[] = [];
  private searchSubject: Subject<string> = new Subject<string>();

  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('debounce').subscribe();

    this.searchSubject.pipe(
      debounceTime(500) // Aplicando debounce de 500ms
    ).subscribe((searchTerm: string) => {
      // Simulando una búsqueda (aquí podrías realizar tu lógica de búsqueda real)
      this.searchResults = this.fakeAPISearch(searchTerm);
    });
  }

  ngOnInit(): void {
  }
  onSearch(event: any) {
    this.searchTerm = event.target.value;
    this.searchSubject.next(this.searchTerm);
  }

  // Simulación de búsqueda en una API
  fakeAPISearch(term: string): string[] {
    // Simulando resultados aleatorios
    return Array.from({ length: 5 }, () => term + Math.random().toString(36).substring(7));
  }
}
