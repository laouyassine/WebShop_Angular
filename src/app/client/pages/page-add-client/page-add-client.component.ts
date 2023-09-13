import { Component } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../service/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent {

  public init : Client = new Client ();
  constructor(private clientsService: ClientsService, private router: Router) {
    console.log(this.init)
  }
  public onAdd(obj: Client) {
    // console.log(obj, 'depuis page add order');
    // faire un appel http en méthode post avec obj
    this.clientsService.postData(obj).subscribe((data) => {
      // redirection
      this.router.navigate(['']);
    });


}
}
