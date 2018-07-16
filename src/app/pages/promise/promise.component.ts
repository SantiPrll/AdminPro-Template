import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-promise",
  templateUrl: "promise.component.html"
})
export class PromiseComponent implements OnInit {
  constructor() {
    this.getPromise()
      .then(() => console.log("End..."))
      .catch(error => console.error("Error: ", error));
  }

  ngOnInit() {}

  getPromise() {
    return new Promise((resolve, reject) => {
      let counter = 0;

      const interval = setInterval(() => {
        counter += 1;
        console.log(counter);

        if (counter === 3) {
          resolve();
          clearInterval(interval);
        }
      }, 1000);
    });
  }
}
