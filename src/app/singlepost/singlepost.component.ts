import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent {
constructor(private route:ActivatedRoute){

}

ngOnInit():void{
  this.route.paramMap.subscribe(value=>{

    let id=value.get('id');
    const title=value.get('title');
    console.log(id,title);

  })
}
}
