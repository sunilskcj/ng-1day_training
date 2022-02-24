import { Component } from "@angular/core";


@Component({
  selector: "app-main",
  templateUrl : "app.component.html",
  styleUrls : ["app.component.css"]
})

export class AppComponent{

num1 : number = 0 ; 
num2 :number = 0
res : number = 0
result : number = 0
name : string = ""

// shw(){
//   console.log("clicked");
  
// }
// show(val : string){
//   console.log(val);

//   this.name = val
// }

 add(a: number, b: number) {
  this.res = a + b
}

 subtract(a: number, b: number) {
  this.res = a - b
}
 multiply = (a: number, b: number) => {
  this.res = a * b
}

 divide = (a: number, b: number) => this.res = a / b
// constructor(){
//   type calculateFnType = (m: number, n: number) => number
// }
show(){
  this.result = this.res ;
  
}


}


//var testFn = (a: number, b: number, c: number) => a + b + c
//calculate(t


