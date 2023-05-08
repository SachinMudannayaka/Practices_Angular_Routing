import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
posts=[
  {
    id:1,
    title:'Title 1',
    content:'Lorem ipsum is simply dummy text of Title 1'
  },
  {
    id:2,
    title:'Title 2',
    content:'Lorem ipsum is simply dummy text of Title 2'
  },
  {
    id:3,
    title:'Title 3',
    content:'Lorem ipsum is simply dummy text of Title 3'
  }
]
constructor(private route:ActivatedRoute){

}



  ngOnInit(): void {
this.route.queryParamMap.subscribe(value=>{

  const page=value.get('page');
   const order=value.get('orderBy')
   console.log(page,order);

})
}
}
