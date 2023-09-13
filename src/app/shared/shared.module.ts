import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { CalculPipe } from './pipes/calcul.pipe';



@NgModule({
  declarations: [
    TotalPipe,
    StateDirective,
    BtnComponent,
    CalculPipe
  ],
  imports: [
    CommonModule,RouterModule
  
  ],
  exports: [
    TotalPipe,
    StateDirective,
    BtnComponent,
    CalculPipe
  ]
})
export class SharedModule { }
