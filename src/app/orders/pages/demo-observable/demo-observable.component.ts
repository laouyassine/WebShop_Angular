import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-observable',
  templateUrl: './demo-observable.component.html',
  styleUrls: ['./demo-observable.component.scss']
})
export class DemoObservableComponent {

  observable =new Observable((obs)=>{
    obs.next(1);
    obs.next(2);
    obs.next(Math.random())

  });

  constructor(){
    this.observable.subscribe((data)=> {
      console.log(data);
    });

    this.observable.subscribe((data)=> {
      console.log(data);
    });
  }

}
