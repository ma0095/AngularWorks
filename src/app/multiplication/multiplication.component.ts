import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {
  num1:number=0;
  num2:number=0;
  result:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  performMultiplication(){
    this.result=0;
    this.result=this.num1*this.num2
    console.log(this.result);
    
  }

}
