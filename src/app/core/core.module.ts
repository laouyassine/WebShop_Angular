import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';



// Dans CoreModule
@NgModule({
  declarations: [NavComponent, HeaderComponent],
  imports: [CommonModule,RouterModule],
  exports: [NavComponent, HeaderComponent, IconsModule],
})
export class CoreModule {}
