import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../services/data-service.service";
import {defer} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css'
})
export class DeferComponent implements OnInit{
  loading = false;
  data: string[] | undefined;
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('defer').subscribe();
  }

  ngOnInit(): void {
    const deferredObservable = defer(() => this.dataservice.fetchData());

    // Utilizando defer para obtener el Observable de fetchData() del servicio
    const fetchData$ = defer(() => {
      this.loading = true;
      return this.dataservice.fetchData();
    });

    fetchData$.subscribe({
      next: (result) => {
        this.loading = false;
        this.data = result;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}

