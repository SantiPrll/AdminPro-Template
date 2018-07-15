import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-graph-doughnut",
  templateUrl: "graph-doughnut.component.html"
})
export class GraphDoughnutComponent {
  @Input() title: string;
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
}
