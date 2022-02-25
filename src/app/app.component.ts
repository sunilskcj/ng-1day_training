import { Component } from "@angular/core";
import { Calculation } from "src/services/calculation";
// import { calculate } from "src/services/calculate";
// import { add, divide, multiply, sub } from "src/services/calculation";


@Component({
  selector: "app-main",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})

export class AppComponent {

  num1: number = 0;
  num2: number = 0
  res: number = 0
  result: number = 0
  name: string = ""
  calcChoice = 0

  constructor(private Calcsrv: Calculation) {

  }


  changeSelection(choice: number) {
    this.calcChoice = choice
  }

  show() {

    {
      switch (this.calcChoice) {
        case 1:
          this.result = this.Calcsrv.add(this.num1, this.num2)
          break;
        case 2:
          this.result = this.Calcsrv.sub(this.num1, this.num2)
          break;
        case 3:
          this.result = this.Calcsrv.multiply(this.num1, this.num2)
          break;
        case 4:
          this.result = this.Calcsrv.divide(this.num1, this.num2)
          break;
        default:
          break;
      }

    }

  }
}
