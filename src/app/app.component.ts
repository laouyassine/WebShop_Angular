import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'decouverte-angular';

  //créer une propriété en booléan
  public open = false;

  public onClick(){
    console.log('cliqué');
    this.open=!this.open;
  }
}
