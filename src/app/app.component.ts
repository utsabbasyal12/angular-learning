import { Component,OnDestroy,OnInit } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy{

  title ="Hello-World";
  
  a=0;
  b=0;

  getMin(a: number,b: number){
    if(a<b){
      return a;
    }
    return b;
  }

  intervalSub: any;
  ngOnInit(): void {
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit');
    }, 1000);
  }

  ngOnDestroy(): void {
    if(this.intervalSub){
      clearInterval(this.intervalSub);
    }
  }
}

