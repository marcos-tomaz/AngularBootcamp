import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {

  public listItems: any[];

  constructor(private httpClient: HttpClient) {
    this.get();
  }

  get(): void{
    this.httpClient.get(environment.firebase.databaseURL + '/items.json').subscribe(
      response => {
        this.listItems = Object.keys(response).map(id => {
          let item = response[id];
          item.id = id;
          return item;
        });
      }
    );
  }

  add(newItem: any): Observable<Object> {
    return this.httpClient.post(environment.firebase.databaseURL + '/items.json', newItem);
  }

  remove(itemId) {
    return this.httpClient.delete(environment.firebase.databaseURL + `/items/${itemId}.json`).subscribe(
        response => {
          console.log('Item removido com sucesso!');
          const foundIndex = this.listItems.findIndex(item => item.id === itemId);
          this.listItems.splice(foundIndex, 1);
        },
        error => {
          console.error('Erro ao remover item!');
        }
      );
  }

  check(editItem: any): Observable<Object> {
    const itemObj = { ...editItem };
    
    itemObj.checked = true;
    itemObj.amount = 0;

    return this.httpClient.put(environment.firebase.databaseURL + `/items/${editItem.id}.json`, itemObj);
  }

}
