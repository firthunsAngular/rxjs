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

import {DistinctComponent} from "./function/distinct/distinct.component";

import {ElementAtComponent} from "./function/element-at/element-at.component";
import {EndWithComponent} from "./function/end-with/end-with.component";
import {EveryComponent} from "./function/every/every.component";
import {ExhaustAllComponent} from "./function/exhaust-all/exhaust-all.component";

import {ExhaustMapComponent} from "./function/exhaust-map/exhaust-map.component";
import {FfirstValueFromComponent} from "./operators/ffirst-value-from/ffirst-value-from.component";
import {FilterComponent} from "./operators/filter/filter.component";
import {FindComponent} from "./operators/find/find.component";
import {FindIndexComponent} from "./operators/find-index/find-index.component";
import {FirstComponent} from "./operators/first/first.component";
import {ForkJoinComponent} from "./operators/fork-join/fork-join.component";
import {FromComponent} from "./operators/from/from.component";
import {FromEventComponent} from "./operators/from-event/from-event.component";
import {GroupByComponent} from "./operators/group-by/group-by.component";
import {LastComponent} from "./operators/last/last.component";
import {LastValueFromComponent} from "./operators/last-value-from/last-value-from.component";
import {MapComponent} from "./operators/map/map.component";
import {MergeComponent} from "./operators/merge/merge.component";
import {MergeAllComponent} from "./operators/merge-all/merge-all.component";
import {MergeMapComponent} from "./operators/merge-map/merge-map.component";
import {MinComponent} from "./operators/min/min.component";
import {OfComponent} from "./operators/of/of.component";
import {PipeComponent} from "./operators/pipe/pipe.component";
import {RaceComponent} from "./operators/race/race.component";
import {RangeComponent} from "./operators/range/range.component";
import {ReduceComponent} from "./operators/reduce/reduce.component";
import {RetryComponent} from "./operators/retry/retry.component";
import {SampleComponent} from "./operators/sample/sample.component";
import {SkipComponent} from "./operators/skip/skip.component";
import {SkipLastComponent} from "./operators/skip-last/skip-last.component";
import {SkipUntilComponent} from "./operators/skip-until/skip-until.component";
import {SkipWhileComponent} from "./operators/skip-while/skip-while.component";
import {SwitchAllComponent} from "./operators/switch-all/switch-all.component";
import {SwitchMapComponent} from "./operators/switch-map/switch-map.component";
import {TakeComponent} from "./operators/take/take.component";
import {TimeoutComponent} from "./operators/timeout/timeout.component";
import {BehaviorSubjectComponent} from "./classes/behavior-subject/behavior-subject.component";
import {ObservableComponent} from "./classes/observable/observable.component";
import {ReplaySubjectComponent} from "./classes/replay-subject/replay-subject.component";
import {SubjectComponent} from "./classes/subject/subject.component";
import {SubscriptionComponent} from "./classes/subscription/subscription.component";



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
      { path: 'distinct', component: DistinctComponent },
      { path: 'elementAt', component: ElementAtComponent },
      { path: 'endWith', component: EndWithComponent },
      { path: 'every', component: EveryComponent },
      { path: 'exhaustAll', component: ExhaustAllComponent },
      { path: 'exhaustMap', component: ExhaustMapComponent },

      { path: 'firstValueFrom', component: FfirstValueFromComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'find', component: FindComponent },
      { path: 'findIndex', component: FindIndexComponent },
      { path: 'first', component: FirstComponent },
      { path: 'forkJoin', component: ForkJoinComponent },
      { path: 'from', component: FromComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'groupBy', component: GroupByComponent },
      { path: 'last', component: LastComponent },
      { path: 'lastValueFrom', component: LastValueFromComponent },
      { path: 'map', component: MapComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'mergeAll', component: MergeAllComponent },
      { path: 'mergeMap', component: MergeMapComponent },
      { path: 'min', component: MinComponent },
      { path: 'of', component: OfComponent },
      { path: 'pipe', component: PipeComponent },
      { path: 'race', component: RaceComponent },
      { path: 'range', component: RangeComponent },
      { path: 'reduce', component: ReduceComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'sample', component: SampleComponent },
      { path: 'skip', component: SkipComponent },
      { path: 'skipLast', component: SkipLastComponent },
      { path: 'skipUntil', component: SkipUntilComponent },
      { path: 'skipWhile', component: SkipWhileComponent },
      { path: 'switchAll', component: SwitchAllComponent },
      { path: 'switchMap', component: SwitchMapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'timeout', component: TimeoutComponent },


      // classes
      { path: 'BehaviorSubject', component: BehaviorSubjectComponent },
      { path: 'observable', component: ObservableComponent },
      { path: 'replaySubject', component: ReplaySubjectComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'subscription', component: SubscriptionComponent },




    ],
  },
]
