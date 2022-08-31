import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router'
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail:any={}
  id:any

  constructor(private service:ItemsService,
   private router:ActivatedRoute) { }

  ngOnInit(): void {

    this.router.params.subscribe(p=>this.id=p["id"])
    // this.productDetail=this.service.getProductDetail(this.id)   //normal call static
    // console.log(this.productDetail);
    this .service.getProductDetail(this.id).then(re=>re.json()).then(data=>this.productDetail=data)  //for api call
  }

}
