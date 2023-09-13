import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/core/models/order';
import { Observable, map } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  // propriétés et des méthodes

  public configUrl = 'http://localhost:3000/orders';

  public sumUp(a: number, b: number): number {
    return a + b;
  }

  // créer une méthode pour fetch('url');
  public getData(): Observable<Order[]> {
    return this.http.get<Order[]>(this.configUrl).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Order(obj);
        });
      })
    );
  }

  // créer une méthode pour post .post('url', newObj);
  // créer une méthode pour post .post('url', newObj);
  // attention, tous les appels HTTP utilisent l'écriture observable/observer
  public add(obj: Order): Observable<Order> {
    return this.http.post<Order>(this.configUrl, obj);
  }

  // méthode créer nouvel objet à partir de obj et de newState
  public changeState(obj: Order, state: StateOrder): Observable<Order> {
    // créer nouvel objet à partir de obj
    const objNew = new Order(obj);
    // modifier la valeur de state
    objNew.state = state;
    // passer objNew à this.update(objNew)
    return this.update(objNew);
  }

  // méthode pour appel put = Observable
  public update(obj: Order): Observable<Order> {
    // .put(url/obj.id, nouvelObjet)
    const url = `${this.configUrl}/${obj.id}`
    return this.http.put<Order>(url, obj);
    
  }

  // getItemById()
  // http.get('url/id')
  public getItemById(id :number): Observable<Order> {
    // const ord = this.http.get<Order>(`/orders/${id}`);
    return  this.http.get<Order>(`${this.configUrl}/${id}`);
  }
  // dans le service > méthode .delete(url/id)
  // redirection
  public delete(id :number): Observable<Order> {
    return  this.http.delete<Order>(`${this.configUrl}/${id}`);
  }

}