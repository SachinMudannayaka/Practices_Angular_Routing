import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routingng';
constructor(private router:Router){}

  ngOnInit(): void {
      const obsTest$=new Observable (observer=>{
        console.log('Printed from observable');
      }).subscribe();
      const obsTest=function(){
console.log('printed from function');


      }
  }

  onSubmit(){
this.router.navigate(['/posts']);
  }
}
