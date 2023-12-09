import {Routes} from "@angular/router";

import {MainRxjsComponent} from "./main-rxjs.component";
import {AnimationFramesComponent} from "./function/animation-frames/animation-frames.component";
import {AuditComponent} from "./function/audit/audit.component";
import {CombineLatestComponent} from "./function/combine-latest/combine-latest.component";
import {ConcatMapComponent} from "./function/concat-map/concat-map.component";
import {ConcatAllComponent} from "./function/concat-all/concat-all.component";
import {ConcatComponent} from "./function/concat/concat.component";
import {CombineLatestWithComponent} from "./function/combine-latest-with/combine-latest-with.component";
import {CombineLatestAllComponent} from "./function/combine-latest-all/combine-latest-all.component";
import {ConcatWithComponent} from "./function/concat-with/concat-with.component";
import {CountComponent} from "./function/count/count.component";

import {DefaultEmptyComponent} from "./function/default-empty/default-empty.component";
import {DeferComponent} from "./function/defer/defer.component";
import {DelayComponent} from "./function/delay/delay.component";
import {DelayWhenComponent} from "./function/delay-when/delay-when.component";
import {DematerializeComponent} from "./function/dematerialize/dematerialize.component";
import {DistinctComponent} from "./function/distinct/distinct.component";
import {DistinctUntilChangedComponent} from "./function/distinct-until-changed/distinct-until-changed.component";
import {
  DistinctUntilKeyChangedComponent
} from "./function/distinct-until-key-changed/distinct-until-key-changed.component";
import {ElementAtComponent} from "./function/element-at/element-at.component";
import {EndWithComponent} from "./function/end-with/end-with.component";
import {EveryComponent} from "./function/every/every.component";
import {ExhaustAllComponent} from "./function/exhaust-all/exhaust-all.component";

import {ExhaustMapComponent} from "./function/exhaust-map/exhaust-map.component";
import {ExpandComponent} from "./function/expand/expand.component";
import {FilterComponent} from "./function/filter/filter.component";


export const  RXJS_ROUTES: Routes = [
  //canActivate: [ AuthGuard ]
  {
    path: '',
    component: MainRxjsComponent,
    children: [
      // functions
      { path: '', component: AnimationFramesComponent },
      { path: 'animationFrames', component: AnimationFramesComponent },
      { path: 'audit', component: AuditComponent },
      { path: 'combineLatest', component: CombineLatestComponent },
      { path: 'combineLatestAll', component: CombineLatestAllComponent },
      { path: 'combineLatestWith', component: CombineLatestWithComponent },
      { path: 'concat', component: ConcatComponent },
      { path: 'concatAll', component: ConcatAllComponent },
      { path: 'concatMap', component: ConcatMapComponent },
      { path: 'concatWith', component: ConcatWithComponent },
      { path: 'count', component: CountComponent },

      { path: 'defaultEmpty', component: DefaultEmptyComponent },
      { path: 'defer', component: DeferComponent },
      { path: 'delay', component: DelayComponent },
      { path: 'delayWhen', component: DelayWhenComponent },
      { path: 'dematerialize', component: DematerializeComponent },
      { path: 'distinct', component: DistinctComponent },
      { path: 'distinctUntilChanged', component: DistinctUntilChangedComponent },
      { path: 'distinctUntilKeyChanged', component: DistinctUntilKeyChangedComponent },
      { path: 'elementAt', component: ElementAtComponent },
      { path: 'endWith', component: EndWithComponent },
      { path: 'every', component: EveryComponent },
      { path: 'exhaustAll', component: ExhaustAllComponent },
      { path: 'exhaustMap', component: ExhaustMapComponent },
      { path: 'expand', component: ExpandComponent   },
      { path: 'filter', component: FilterComponent },
    ],
  },
]
