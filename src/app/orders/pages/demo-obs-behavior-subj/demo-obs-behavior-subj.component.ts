import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-demo-obs-behavior-subj',
  templateUrl: './demo-obs-behavior-subj.component.html',
  styleUrls: ['./demo-obs-behavior-subj.component.scss']
})
export class DemoObsBehaviorSubjComponent {
  // créer un nouvel observable de type BehaviorSubject()
  subj = new BehaviorSubject(0);

  constructor() {
    // souscrire à l'observable
    this.subj.subscribe((data) => {
      console.log(data, 'premier observer');
    });

    // envoi d'une nouvelle valeur
    this.subj.next(1);

    // souscrire à l'observable
    this.subj.subscribe((data) => {
      console.log(data, 'deuxième observer');
    });

    // envoi d'une nouvelle valeur
    this.subj.next(Math.random());
  }
}