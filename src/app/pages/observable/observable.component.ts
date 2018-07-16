import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  Observable,
  Subscriber,
  Subscription
} from "../../../../node_modules/rxjs";
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: "app-observable",
  templateUrl: "./observable.component.html",
  styles: []
})
export class ObservableComponent implements OnInit, OnDestroy {
  subcription: Subscription;

  constructor() {
    this.subcription = this.getObservable()
      .pipe(
        map(rep => rep.value),
        filter((value, index) => {
          if (value % 2 === 1) return true;
          else return false;
        })
      )
      // .pipe(retry(2))
      .subscribe(
        number => console.log("Subs: ", number),
        error => console.error("Error: ", error),
        () => console.log("End Obs")
      );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  getObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let counter = 0;

      const interval = setInterval(() => {
        counter += 1;

        const out = {
          value: counter
        };

        observer.next(out);

        if (counter === 3) {
          observer.complete();
          clearInterval(interval);
        }

        // if (counter === 2) {
        //   observer.error("Help");
        // }
      }, 1000);
    });
  }
}
