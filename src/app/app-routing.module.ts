import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { CoursesComponent } from './courses/courses.component';
import { ItemsComponent } from './items/items.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { WordCountComponent } from './word-count/word-count.component';

const routes: Routes = [
  {path:"addition",component:AdditionComponent},
  {path:"subtraction",component:SubtractionComponent},
  {path:"multiplication",component:MultiplicationComponent},
  {path:"WordCount",component:WordCountComponent},
  {path:"course-list",component:CoursesComponent},
  {path:"product-list",component:ItemsComponent},
  {path:"products/:id",component:ProductDetailComponent},  //getting specific product detail
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
