import { state } from '@angular/animations';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective {
  @Input() stateObj!: string;
  @HostBinding ('class') tdClassName !: string;
  
  constructor() {
    // console.log(this.stateObj, 'depuis constructor');
  }
  // déclenché une seule fois
  ngOnInit(){
    // console.log(this.stateObj, 'depuis constructor');
    // CONFIRMED state-confirmed
    // this.tdClassName = 'state-' + this.stateObj.toLowerCase();
    // this.tdClassName = `state-${this.stateObj.toLowerCase()}`;
  }
  // ici on utilise ngOnChanges car besoin de modifier les styles plusieurs fois
  ngOnChanges() {
    this.tdClassName = `state-${this.stateObj.toLowerCase()}`;
  }
}
