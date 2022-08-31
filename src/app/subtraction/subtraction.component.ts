import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {
  num1:number=0;
  num2:number=0;
  result:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  performSubtraction(inp1:HTMLInputElement,inp2:HTMLInputElement){
    this.num1=Number(inp1.value);
    this.num2=Number(inp2.value);
    this.result=this.num1-this.num2
    console.log(this.result);
    
  }

}
