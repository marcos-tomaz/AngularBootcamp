import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {

  public listItems: any[];

  itemsRef: AngularFireList<any>;
  listItemsFirebase: Observable<any[]>;

  constructor(private httpClient: HttpClient, private angularFireDatabase: AngularFireDatabase) {
    this.itemsRef = angularFireDatabase.list('items', ref => ref.orderByChild('checked'));

    this.listItemsFirebase = this.itemsRef.snapshotChanges().pipe(
      map( changes => {
          return changes.map(c => {
           return { id: c.payload.key, ...c.payload.val() };
        });
      })
    );

    // this.get();
  }

  // get(): void{
  //   this.httpClient.get(environment.firebase.databaseURL + '/items.json').subscribe(
  //     response => {
  //       this.listItems = Object.keys(response).map(id => {
  //         let item = response[id];
  //         item.id = id;
  //         return item;
  //       });
  //     }
  //   );
  // }

  // add(newItem: any): Observable<Object> {
  //   return this.httpClient.post(environment.firebase.databaseURL + '/items.json', newItem);
  // }

  add(newItem: any){
    this.itemsRef.push(newItem).then(_ => console.log('Item adicionado com sucesso.'));
  }

  // remove(itemId) {
  //   return this.httpClient.delete(environment.firebase.databaseURL + `/items/${itemId}.json`).subscribe(
  //       response => {
  //         console.log('Item removido com sucesso!');
  //         const foundIndex = this.listItems.findIndex(item => item.id === itemId);
  //         this.listItems.splice(foundIndex, 1);
  //       },
  //       error => {
  //         console.error('Erro ao remover item!');
  //       }
  //     );
  // }

  remove(itemId) {
    this.itemsRef.remove(itemId);
  }

  removeAll(){
    this.itemsRef.remove();
  }

  // check(editItem: any): Observable<Object> {
  //   const itemObj = { ...editItem };
    
  //   itemObj.checked = true;
  //   itemObj.amount = 0;

  //   return this.httpClient.put(environment.firebase.databaseURL + `/items/${editItem.id}.json`, itemObj);
  // }

  check(editItem: any){
    const itemObj = { ...editItem };

    itemObj.checked = true;
    itemObj.amount = 0;

    this.itemsRef.update(itemObj.id, itemObj);
  }

}
