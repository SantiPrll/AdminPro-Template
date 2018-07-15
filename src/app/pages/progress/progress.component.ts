import { Component } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "progress.component.html"
})
export class ProgressComponent {
  progressBlue: number = 30;
  progressGreen: number = 50;
  constructor() {}
}
