import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  @ViewChild(ChildComponent) child:any;

  constructor(){}

  ngAfterViewInit(){
    alert(this.child.message);
  }

  recceiveMessage(msg: string){
    alert (msg);
  }
}
