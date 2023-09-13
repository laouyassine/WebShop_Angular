import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { IconCloseComponent } from './icon-close/icon-close.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



// dans icons.module.ts
@NgModule({
  declarations: [IconNavComponent, IconCloseComponent],
  imports: [CommonModule,FontAwesomeModule],
  exports: [IconNavComponent, IconCloseComponent],
})
export class IconsModule {}
