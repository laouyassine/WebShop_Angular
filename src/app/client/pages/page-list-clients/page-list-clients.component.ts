import { Component } from '@angular/core';
import { ClientsService } from '../../service/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent {
  public tabClients !: any ;

  public headers: string[] = [
    'Action',
    'state',
    'tva',
    'id',
    'name',
    'totalCaHt',
    'totalTtc',
    'comment',
  ];
  // public totalTtc(TotalCaHt : number, tva:number){
  //   return (TotalCaHt * (100+tva))/100
  // }
  public calcul(val: number, tva: number){
    console.log("déclenché");
    return val * (1 + tva/100);
  }
  constructor(private clientsService: ClientsService) {

    this.clientsService.getData().subscribe((data) => {
      console.log(data); 
      this.tabClients=data; 
    });
  }

}
