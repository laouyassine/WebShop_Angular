import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})

export class BtnComponent {
  @Input() title!: string;
  @Input() routeInfo!: string;
    @Input() styleBtn!: string;


  constructor(){
    // this.routeInfo="/orders/Add"
  //  console.log(this.routeInfo);
  }

  ngOnInit(){
    console.log(this.title);
    console.log(this.routeInfo);

  }
}
