import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-demo-obs-subject',
  templateUrl: './demo-obs-subject.component.html',
  styleUrls: ['./demo-obs-subject.component.scss']
})
export class DemoObsSubjectComponent {
  subj = new Subject();

  constructor() {
    // créer un premier observer
    this.subj.subscribe((data) => {
      console.log(data, 'premier observer');
    });

    // on passe des valeurs
    this.subj.next(1);

    // créer un deuxième observer
    this.subj.subscribe((data) => {
      console.log(data, 'deuxième observer');
    });
  }

}
