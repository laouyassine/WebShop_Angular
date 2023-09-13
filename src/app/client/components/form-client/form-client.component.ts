import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent {
  public form!: FormGroup;
  @Input() objClient!: Client;

  @Output() submitted = new EventEmitter ();


  constructor(private fb : FormBuilder){}
  public clientStates = Object.values(StateClient);  


  ngOnInit(){
    console.log(this.objClient)
    // associer un objet à chacun des inputs du form
    this.form = this.fb.group({
      state: [this.objClient.state],
      tva: [
        this.objClient.tva,
        
      ],
      id: [
        this.objClient.id,
        
      ],
      name: [this.objClient.name],
      totalCaHt : [this.objClient.totalCaHt],
      
      comment: [this.objClient.comment],
    });
  }


  public onSubmit() {
    // vérifier que le clic fonctionne
    // console.log('cliqué depuis onSubmit');
    // vérifier le form
    // console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}
