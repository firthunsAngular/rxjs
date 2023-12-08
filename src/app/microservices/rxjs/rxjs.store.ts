import {ComponentStore} from "@ngrx/component-store";
import {Injectable} from "@angular/core";
import {tap} from "rxjs";

export interface RxjsState {
  loading: boolean;
  showModal: boolean;
  tag_info:string;
  info_rxjs:string;
}
const  DEFAULT_RXJS_STATE: RxjsState = {
  loading: false,
  showModal: false,
  tag_info: "",
  info_rxjs: `
    <p>El operador <strong>audit</strong> en RxJS es útil cuando necesitas controlar la emisión de valores...</p>

  `
}
@Injectable({
  'providedIn': 'root'
})
export class RxjsStore extends ComponentStore<RxjsState>{

  constructor() {
    super(DEFAULT_RXJS_STATE);
  }

//   SELECTS
  readonly vm$= this.select((state)=>state).pipe(
    tap(state=>console.log('[INICIO]', state) ));
  readonly info_rxjs$ = this.select(state => state.info_rxjs);
  readonly tag_info$ = this.select(state => state.tag_info);
  readonly loading$ = this.select(state => state.loading);
  readonly showModal$ = this.select(state => state.showModal);

  // EFFECTS



  // UPDATERS
  readonly updateInfo_rxjs = this.updater((state, info_rxjs: string) => ({
    ...state,
    info_rxjs
  })) ;
  readonly updateTag_info = this.updater((state, tag_info: string) => ({
    ...state,
    tag_info
  }))
  readonly updateLoading = this.updater((state, loading: boolean) => ({
    ...state,
    loading
  }));
  readonly updateShowModal = this.updater((state, showModal: boolean) => ({
    ...state,
    showModal
  }))
}
