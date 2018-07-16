import { Component, OnInit } from "@angular/core";
import {
  Router,
  ActivationEnd
} from "../../../../node_modules/@angular/router";
import { filter, map } from "../../../../node_modules/rxjs/operators";
import {
  Title,
  MetaDefinition,
  Meta
} from "../../../../node_modules/@angular/platform-browser";

@Component({
  selector: "app-breadcrums",
  templateUrl: "breadcrums.component.html"
})
export class BreadcrumsComponent implements OnInit {
  title: string;

  constructor(
    private _router: Router,
    private _title: Title,
    private _meta: Meta
  ) {
    this._router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )
      .subscribe(data => {
        this.title = data.title;
        this._title.setTitle(this.title);

        const metaTag: MetaDefinition = {
          name: "description",
          content: this.title
        };

        this._meta.updateTag(metaTag);
      });
  }

  ngOnInit() {}
}
