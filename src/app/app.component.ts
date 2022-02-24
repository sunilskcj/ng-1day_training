import { Component } from "@angular/core";
import { calculate } from "src/models/calculate";
import { add, divide, multiply, sub } from "src/models/calculation";


@Component({
  selector: "app-main",
  templateUrl : "app.component.html",
  styleUrls : ["app.component.css"]
})

export class AppComponent{

num1 : number = 0  ; 
num2 :number = 0
res : number = 0
result : number = 0
name : string = ""
calcChoice = 0


changeSelection(choice : number){
this.calcChoice = choice
}

show(){
  switch (this.calcChoice) {
    case 1: 
    this.result = calculate(add, this.num1 , this.num2)
    break;
    case 2: 
    this.result = calculate(sub, this.num1 , this.num2)
    break;
    case 3: 
    this.result = calculate(multiply, this.num1 , this.num2)
    break;
    case 4: 
    this.result = calculate(divide, this.num1 , this.num2)
    break;
    default:
      break;
  }
  
}


}


//var testFn = (a: number, b: number, c: number) => a + b + c
//calculate(t


