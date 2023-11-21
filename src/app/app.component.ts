import { Component,OnInit } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  intervalSub: any;
  ngOnInit(): void {
      this.intervalSub = setInterval(() => {
        console.log('Hello from ngOnInit');
      }, 1000);
  }
}
