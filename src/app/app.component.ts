import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullName : string = 'David Brennan';
  fullNameMsg : string;
  total : number;
  isTrueOrFalse : boolean;
  numberResult : string;

  outputFullName() : void {
    console.log("Hello", this.fullName);
  }

  outputFNameSName(fName : string, sName : string) : void {
    console.log(fName);
    console.log(sName);
    this.fullNameMsg = fName + " " + sName;
    console.log("Welcome ", this.fullNameMsg);
  }

  addNumbers(numOne : HTMLInputElement, numTwo : HTMLInputElement) : void {
    this.total = +numOne.value + +numTwo.value;
    //this.total = numOne.valueAsNumber + numTwo.valueAsNumber;
  }

  trueOrFalse(value : number) {
    if (value % 2 == 0)
    {
      this.numberResult = "Even";
      console.log(this.numberResult);
      this.isTrueOrFalse = true;
    }
    else
    {
      this.numberResult = "Odd";
      console.log(this.numberResult);
      this.isTrueOrFalse = false;
    }
  }
}
