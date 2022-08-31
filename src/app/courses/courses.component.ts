import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:any=[
    {id:1,name:"python django",fee:35000,rating:4,durasion:"5monts"},
    {id:1,name:"mearn",fee:55000,rating:4,durasion:"6monts"},
    {id:1,name:"testing",fee:29000,rating:4,durasion:"4monts"},
    {id:1,name:"ML,AI",fee:30000,rating:5,durasion:"5monts"},


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
