import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {forkJoin, timer} from "rxjs";

@Component({
  selector: 'app-fork-join',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './fork-join.component.html',
  styleUrl: './fork-join.component.css'
})
export class ForkJoinComponent  implements OnInit, OnDestroy {

  combinedData: any;
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('forkJoin').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  combineRequests() {
    const users$ = this.dataservice.getUsersforkJoin();
    const posts$ = this.dataservice.getPostsforkJoin();

    forkJoin({ users: users$, posts: posts$ }).subscribe((res) => {
      this.combinedData = res;
    });
  }
}
