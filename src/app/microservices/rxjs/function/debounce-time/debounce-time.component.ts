import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, Subject, switchMap} from "rxjs";
import {DataServiceService} from "../services/data-service.service";
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {CommonModule} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-debounce-time',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.css'
})
export class DebounceTimeComponent implements OnInit{

  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('debounceTime').subscribe();
  }

  ngOnInit(): void {

  }


}
