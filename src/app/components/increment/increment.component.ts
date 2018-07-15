import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-increment",
  templateUrl: "increment.component.html"
})
export class IncrementComponent {
  @Input() legend: string = "Legend";
  @Input() progress: number = 50;

  @Output("progress")
  progressChanges: EventEmitter<number> = new EventEmitter();

  @ViewChild("txtProgress") txtProgress: ElementRef;

  onChanges(newValue: number) {
    if (newValue === null) {
      this.progress = 0;
    }

    if (newValue >= 100) {
      this.progress = 100;
    }

    if (newValue <= 0) {
      this.progress = 0;
    }

    this.txtProgress.nativeElement.value = this.progress;

    this.progressChanges.emit(this.progress);
  }

  changesValue(value: number) {
    const valueNow: number = this.progress + value;

    if (valueNow < 0 || valueNow > 100) {
      return;
    }

    this.progress = valueNow;

    this.progressChanges.emit(this.progress);
  }
}
