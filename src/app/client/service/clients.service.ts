import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  public configUrl = 'http://localhost:3000/clients';

  public getData() {
    return this.http.get(this.configUrl);
  }
  public postData(obj:Client):Observable<Client>{
    return this.http.post<Client>(this.configUrl,obj);
  }

}
