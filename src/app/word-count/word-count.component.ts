import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-count',
  templateUrl: './word-count.component.html',
  styleUrls: ['./word-count.component.css']
})
export class WordCountComponent implements OnInit {
  text:string="";
  wordcount:any={}

  constructor() { }

  ngOnInit(): void {
  }
  countWord(){
    this.text.split(" ").forEach(w=>w in this.wordcount ? this.wordcount[w]+=1: this.wordcount[w]=1)
    console.log(this.wordcount);

    
    // let word=this.text.split(" ")
    // for(let w of word){
    //   if(w in this.wordcount){
    //     this.wordcount[w]+=1
    //   }
    //   else{
    //     this.wordcount[w]=1;
    //   }

    // }
    
  }

}
