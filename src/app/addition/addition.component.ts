import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numOnePlaceHolder:string="enter value for number one";  //implimentinte thaazhe aatathukonddu interface methord aanu ithu ,so numOne and num2 explicit aayittu kodukkanam
  numTwoPlaceHolder:string="enter value for number two";

  num1:number=0;
  num2:number=0;
  result:number=0;

  setnum1(event:any){
    this.num1=Number(event.target.value)


  }
  setnum2(event:any){
    this.num2=Number(event.target.value)

  }
  performAddition(){
    this.result=0
    this.result=this.num1+this.num2
    console.log(this.result);
    
  }

}
