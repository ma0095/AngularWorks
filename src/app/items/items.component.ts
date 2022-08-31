import { Component, OnInit } from '@angular/core';
import{ItemsService} from '../services/items.service'
import{Router}from '@angular/router'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:any=[]
  constructor(private service:ItemsService,
        private router : Router ) { 
    // this.items=service.getProducts()   //normal static call

    service.getProducts().then(re=>re.json()).then(data=>this.items=data) //for api call ...fetch call
    

  }

  ngOnInit(): void {
    console.log(this.items)
  }
  renderProductDetailComponent(id:any){
    console.log(id);  //products/1 
    this.router.navigate(["products/",id])
    

  }

}
