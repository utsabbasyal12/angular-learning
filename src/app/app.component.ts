import { Component,OnDestroy,OnInit } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy{

  //lifecycle hooks

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

  showText = false;

  toggleText(event: any): void
{
  this.showText = !this.showText;
  console.log(event);
}}

