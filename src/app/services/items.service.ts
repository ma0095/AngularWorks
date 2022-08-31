import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  products:any=[]



  constructor() { }
  
  getProducts(){
    // return this.products
    return fetch("https://fakestoreapi.com/products") //from fakestore products link
  }
  getProductDetail(id:number){
    // return this.products.find((p:any)=>p.id==id)  //normal static call

    return fetch(`https://fakestoreapi.com/products/${id}`)  //getting specific item detail  ...api call
  }
}
