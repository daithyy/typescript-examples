import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullName : string = 'David Brennan';
  fullNameMsg : string;
  total : number;

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
}
